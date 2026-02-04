import express from 'express';;
import { createUser } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { createdUserSchema } from "../validators/user.validator.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.post('/', 
    validate(createdUserSchema), 
    asyncHandler(createUser));    

export default router;
