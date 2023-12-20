import  express from "express";
import * as responses from "../Response/response.js";
import Chatbot from "../models/ChatbotModels.js";

const router = express.Router();

router.post("/chatbot", async (req, res) => {
  try {
    // Ambil pesan dari request body
    const message = req.body.message;

    // Buat instance Chatbot
    const chatbot = new Chatbot();

    // Dapatkan tanggapan dari chatbot
    const response = await chatbot.getChatbotResponse(message);

    // Kembalikan respon sukses dengan informasi tanggapan chatbot
    return res.json(responses.successResponse({
      error: false,
      message: "success",
      botResponse: response,
    }));
  } catch (error) {
    console.error(error);
    return res.json(responses.failedResponse("Internal server error"));
  }
});
export default router;
