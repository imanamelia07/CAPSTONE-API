import { Sequelize } from "sequelize";
import Question from "../models/QuestionModels.js";

// Inisialisasi koneksi database
const db = new Sequelize('db_project','root', '',{
     host: "localhost",
     dialect: "mysql"
});

// Tambahan metode untuk menemukan pertanyaan berdasarkan ID
export function findOneByQuestionId(questionId) {
     try {
     return db.questions.findOne({
     where: {
         questionId,
       },
     });
    } catch (error) {
       console.log(error);
     return null;
     }
}

// Ekspor model pertanyaan
export default Question;
