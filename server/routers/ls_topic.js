import express from "express";

import {findLsCourse, findLsPart, getAllLsTopic, getLsCourse} from "../controllers/LsTopicController.js"
const router = express.Router()

router.get('/', getAllLsTopic)
router.get('/course', getLsCourse)
router.get('/course/:id', findLsCourse)
router.get('/part/:id', findLsPart)


export default router