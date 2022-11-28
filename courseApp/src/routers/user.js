import { Router } from "express";
import CT from '../controllers/user.js'
const router = Router()

router.get('/users',CT.GET)

router.post('/users/register',CT.REGISTER)
router.post('/users/login',CT.LOGIN)

export default router