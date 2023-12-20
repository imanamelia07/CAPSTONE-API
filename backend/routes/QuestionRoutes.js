import { Express, response } from "express";
import Question from "../models/QuestionModels";

const router =express.router

router.get("/question", async (req, res) => {
    try {
        const question = await Question.findAll();
        if (!questions) {
            return res.json(response.failedResponse("'No question found"));
        }
    } catch (error) {
        console.error(error);
        return res.json(response.failedResponse("Internal server error"));
    }
});

export default router;