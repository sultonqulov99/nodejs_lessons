import { Router } from "express";
import CT from '../controllers/tense.js'
const router = Router()

router.get('/tenses',CT.GET)

export default router