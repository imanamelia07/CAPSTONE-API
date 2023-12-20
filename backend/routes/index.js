import express from "express";
import { getUsers, Register, Login, getQuestion } from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/users',Register);
router.post('/login',Login);
router.get('/question',getQuestion);
router.post('/questionnaireResult',getQuestion);

export default router;