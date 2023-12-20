import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import { findOneByQuestionId } from "./config/Database-question.js";
dotenv.config();
const app = express();
const questionId = "question-FvU4u0Vp2S3PMsFg";
const question = await findOneByQuestionId(questionId);

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);
app.get(question);

app.listen(9000, () => console.log('Server running at port 9000'));