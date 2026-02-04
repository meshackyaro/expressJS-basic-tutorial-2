import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";

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