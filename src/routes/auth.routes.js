import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { login } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema } from "../validators/auth.validator.js";

const router = Router();

router.post(
    "/login",
    validate(loginSchema),
    asyncHandler(login)
);

export default router;