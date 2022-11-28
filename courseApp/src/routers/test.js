import { Router } from "express";
import CT from '../controllers/test.js'
const router = Router()

router.get('/tests',CT.GET)

export default router