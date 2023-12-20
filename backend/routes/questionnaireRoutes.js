import  express  from "express";
import Question from "../models/QuestionModels.js";
import Question from "../config/Database-question.js";

const router = express.Router();

 router.get("/question", async (req, res) => {
    try {
      const questions = await Question.findAll();
      if (!questions) {
        return res.json(response.failedResponse("No question found"));
      }
      return res.json(response.successResponse({ listQuestion: questions }));
    } catch (error) {
      console.error(error);
      return res.json(response.failedResponse("Internal server error"));
    }
  });
  
 router.post("/question/result", async (req, res) => {
    try {
      const point = req.body.point;
      if (!point) {
        return res.json(response.failedResponse("Point is required"));
      }
  
      const result = getQuestionnaireResult(point);
  
      return res.json(response.successResponse({
        error: false,
        message: "Success",
        questionnaireResult: result,
      }));
    } catch (error) {
      console.error(error);
      return res.json(response.failedResponse("Internal server error"));
    }
  });

 router.get("/question/result", async (req, res) => {
    try {
      // Ambil semua hasil kuisioner berdasarkan id pengguna
      const results = await Question.findAll({
        where: {
          user_id: userId,
        },
      });
  
      if (!results) {
        return res.json(response.failedResponse("No results found"));
      }
  
      // Kembalikan respon sukses dengan informasi hasil kuisioner
      return res.json(response.successResponse({
        error: false,
        message: "Results fetched successfully",
        listResult: results.map((result) => ({
          idResult: result.id,
          dateResult: result.date, 
          questionnaireResult: result.result, 
        })),
      }));
    } catch (error) {
      console.error(error);
      return res.json(response.failedResponse("Internal server error"));
    }
  });
  

export default router;

