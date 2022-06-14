import express from "express";

import { getAllWordStore, getWordStoreByUser } from "../controllers/WordStroreController.js";
import auth from "../middlewares/auth.js";
import authOptional from "../middlewares/authOptional.js";
const router = express.Router()

// courses/

router.get('/', getAllWordStore)
// router.get('/findbyuser', authOptional, getWordStoreByUser)
router.get('/id_user/:idUser', getWordStoreByUser)

export default router