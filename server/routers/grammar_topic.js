import express from "express";

import {getAllGrammarTopic, findGrammarTopic} from "../controllers/GrammarController.js"
const router = express.Router()

router.get('/', getAllGrammarTopic)
router.get('/:id', findGrammarTopic)


export default router