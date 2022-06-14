import express from "express"
import * as ExamController from "./../controllers/ExamController.js"

const router = express.Router()

router.get("/getAllExam", ExamController.getAllExam)
router.get("/update/:idExam", ExamController.updateExam)
router.get("/:idExam", ExamController.getExam)
export default router
