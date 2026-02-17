import express from 'express';;
import { protect } from "../middlewares/auth.middleware.js";
import { changePassword, profile, updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get(
    "/profile",
    protect, profile
);

router.put(
    "/profile",
    protect, updateProfile
);

router.patch(
    "/change-password",
    protect, changePassword
);

export default router;
