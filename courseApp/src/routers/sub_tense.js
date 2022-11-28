import { Router } from "express";
import CT from '../controllers/sub_tense.js'
const router = Router()

router.get('/sub_tense',CT.GET)

export default router