import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { login, logout, profile } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema } from "../validators/auth.validator.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/login",
    validate(loginSchema),
    asyncHandler(login)
);
router.get(
    "/profile",
    protect, profile
);

export default router;