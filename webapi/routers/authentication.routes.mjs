import { Router } from 'express'
import { loginController, registerController } from '../controllers/user.controller.mjs';

const router = Router();

router.post('/register', registerController)
router.post('/login', loginController)

export default router;