import Users from "../models/UserModel.js";
import  Jwt  from "jsonwebtoken";

export const tokenRefresh = async(req,res) => {
    try {
       const tokenRefresh = req.cookies.tokenRefresh;
       if(!tokenRefresh) return res.sendStatus(401);
       const user = await Users.findAll({
        where:{
            token_refresh: tokenRefresh
        }
       });
       if(!user[0]) return res.sendStatus(403);
       Jwt.verify(tokenRefresh, process.env.TOKEN_REFRESH, (err, decoded) => {
         if(err) return res.sendStatus(403);
         const userId = user [0].id;
         const name = user [0].name;
         const email = user [0].email;
         const accessToken = Jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expireIn: '20s'
         });
         res.json({ accessToken});
        });
    } catch (error) {
        
    }
}