import { Sequelize } from "sequelize";

// Inisialisasi koneksi database
const db = new Sequelize('db_project','root', '',{
     host: "localhost",
     dialect: "mysql"
});

// Tambahan metode untuk menemukan pertanyaan berdasarkan ID
async function findOneByQuestionId(Id) {
     try {
       return await db.Question.findOne({
         where: {
           Id,
         },
       });
     } catch (error) {
       console.error(error);
       return null;
     }
   }
   
   async function findAll() {
     try {
       return await db.Question.findAll();
     } catch (error) {
       console.error(error);
       return null;
     }
   }
   
// Ekspor model pertanyaan
export default db;