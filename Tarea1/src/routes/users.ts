import { Router } from "express";
import usersRole from "./../controllers/controller";
import { roles } from "../middlewares/auth";

const router = Router();

router.get('', roles(['admin', 'gerente']),  usersRole.listAll);

export default router;
