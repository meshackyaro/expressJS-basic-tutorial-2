import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const createUserService = async ({username, email, password}) => {

    const existingUser = await User.findOne({email, username});

    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    return {
        id: user.id,
        username: user.username,
        email: user.email
    }
};

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

export const logoutService = async ( {userId} ) => {

    


}