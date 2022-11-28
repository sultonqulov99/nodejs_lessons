import { Router } from "express";
import CT from '../controllers/level.js'
const router = Router()

router.get('/levels',CT.GET)

export default router