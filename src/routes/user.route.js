import express from 'express';;
import { protect } from "../middlewares/auth.middleware.js";
import { profile, updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get(
    "/profile",
    protect, profile
);

router.put(
    "/profile",
    protect, updateProfile
);

export default router;
