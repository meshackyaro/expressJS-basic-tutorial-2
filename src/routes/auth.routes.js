import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { login } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema, createdUserSchema } from "../validators/auth.validator.js";
import { createUser } from "../controllers/auth.controller.js";

const router = Router();

router.post('/', 
    validate(createdUserSchema), 
    asyncHandler(createUser)
);

router.post(
    "/login",
    validate(loginSchema),
    asyncHandler(login)
);

export default router;