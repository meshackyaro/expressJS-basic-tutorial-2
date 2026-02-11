import { loginService, createUserService } from "../services/auth.service.js";
import { generateToken } from "../utils/jwt.js";

export const createUser = async (req, res) => {

    const user = await createUserService(req.body);

    res.status(201).json(user);

};

export const login = async (req, res) => {

    const {email, password} = req.body;

    const user = await loginService({email, password});
    
    const token = generateToken(user._id);

    res.status(200).json({
        message: "Login successful",
        token
    });
    
};

export const logout = (req, res) => {
    res.status(200).json({
        status: "SUCCESS",
        message: "Logged out successfully"
    });
};