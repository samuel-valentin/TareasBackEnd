import { Router } from "express";
import usersController from './../controllers/users.controllers';

const router = Router();

router.post("/", usersController.registerUser);
router.post('/login', usersController.loginUser);

export default router;