import { User } from "../models/user.model"
import bcrypt from "bcrypt";

export const changePassword = async (userId, currentPassword, newPassword) => {

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(currentPassword, newPassword);

    if (!isMatch) throw new Error("Incorrect password");

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    return {
        message: "Password changed successfully"
    };
};
    
