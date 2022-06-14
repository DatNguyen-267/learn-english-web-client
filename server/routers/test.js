import { testGET } from "../controllers/_ToolCRUDCourse.js"
import express from "express"
import { getAllExam } from "../controllers/ExamController.js"
const router = express.Router()

router.get("/", testGET)

export default router
