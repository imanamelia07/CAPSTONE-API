import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
     const users = await Users.findAll({
        attributes:['id','name','email']
     });
         res.json(users);
     } catch (error) {
         console.log(error);
     }
}

export const Register = async(req, res) => {
   const { name, email,password,confPassword} = req.body;

 // Validasi input sebelum hashing
     if (password === "" || confPassword === "") {
       return res.status(400).json({ msg: "Password or Confirm password is required" });
     }

     if (password !== confPassword) {
     return res.status(400).json({ msg: "Password and Confirm password not valid" });
     }

 // Validasi tambahan
    const passwordMinLength = 8;
    if (password.length < passwordMinLength) {
    return res.status(400).json({ msg: "Password must be at least 8 characters long" });
    }

    const specialCharacters = /[~!@#$%^&*()_+{}|:<>?,./;'"]/;
     if (!specialCharacters.test(password)) {
     return res.status(400).json({ msg: "Password must contain at least one special character" });
    }

 // Hash password sebelum menyimpan
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
     const userExists = await Users.findOne({ where: { email } });
      if (userExists) {
         return res.status(400).json({ msg: "Email already exists" });
        }
        
        await Users.create({
         name: name,
         email: email,
         password: hashPassword,
         });
         res.json({ msg: "Register Successfull" });
    } catch (error) {
         console.log(error);
    }
}

export const Login = async (req,res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });

        if (!user) {
            // Kirim error "Not Found"
            return res.status(400).json({
              error: true,
              message: "Not Found!",
            });
          }
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg:"Invalid Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '30s'
        });
        const tokenRefresh = jwt.sign({userId, name, email}, process.env.TOKEN_REFRESH,{
            expiresIn: '1d'
        });
        await Users.update({token_refresh:tokenRefresh},{
            where: {
                id: userId
            }
        });
        res.cookie('tokenRefresh', tokenRefresh,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 *1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(400).json({msg: "Invalid Email Address"});
    }
}


