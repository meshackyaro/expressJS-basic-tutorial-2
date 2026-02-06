import { loginService } from "../services/auth.service.js";
import { generateToken } from "../utils/jwt.js";

export const login = async (req, res) => {

    const {email, password} = req.body;

    const user = await loginService({email, password});
    
    const token = generateToken(user._id);

    res.json({
        message: "Login successful",
        token
    });
    
};