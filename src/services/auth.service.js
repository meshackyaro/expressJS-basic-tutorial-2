import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const loginService = async ({email, password}) => {
    
    const user = await User.findOne({email});

    if (!user) throw new Error("incorrect email or password");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error("incorrect email or password");

    const token = generateToken(user.id);

    return {
        id: user.id,
        token,
    };

};