import { Router } from "express";
import userRoutes from './users';

const router = Router();

router.get("/", (req, res) => {
  res.send("API Works");
});

router.use('/users', userRoutes);

export default router;