import { Router } from "express";
import userRoutes from "./user.route.js";
import authRoutes from "./auth.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;