import { asyncHandler } from "../utils/asyncHandler.js";
import { loginService } from "../services/auth.service.js";

export const login = async (req, res) => {

    const {email, password} = req.body;

    const user = await loginService({email, password});

    res.json({
        message: "Login successful",
        user
    });
    
};