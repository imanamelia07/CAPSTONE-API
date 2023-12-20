import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import Question from "./models/QuestionModels.js";
import question from "./config/Database-question.js";
import questionnaireResult from "./models/questionnaireResult.js";
import Chatbot from "./models/ChatbotModels.js";
import router from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import  findOneByQuestionId from "./config/Database-question.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({credentials:true}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.get(question);

const PORT = process.env.PORT || 9000;
app.listen(PORT, _ => {
    console.log(`Server Running at port ${PORT}`);
});