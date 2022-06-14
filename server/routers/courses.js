import express from "express";

import {
  addWordToStore,
  completedTopic,
  getAllVocaCourse, 
  getCourse, 
  getListWord, 
  getVocaCourse,
  getVocaTopic,
  removeWordOfStore,
  reviewTopic
}  from "../controllers/VocaCourseController.js";
import auth from "../middlewares/auth.js";
import authOptional from "../middlewares/authOptional.js";
const router = express.Router()

// courses/
router.get('/voca/:idVocaCourse/:idVocaTopic', authOptional, getVocaTopic)
router.get('/voca/:idVocaCourse',authOptional, getVocaCourse)
router.get('/voca', getAllVocaCourse)
router.post('/voca/addWordToStore', authOptional, addWordToStore)
router.post('/voca/removeWordOfStore', authOptional, removeWordOfStore)
router.post('/voca/completedTopic', authOptional, completedTopic)
router.get('/get-topic/:topicId', getListWord)
router.get('/get-course/:courseId', getCourse)
router.get('/review/:lsId', reviewTopic)
export default router