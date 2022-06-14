import express from "express";
import { getAllLsQuestion } from "../controllers/LsQuestionController.js";

const router = express.Router()

router.get('/', getAllLsQuestion)


export default router