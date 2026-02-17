import { object } from "zod";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const getUserProfile = async (userId) => {

    const user = await User.findById(userId).select("-password");

    if (!user) throw new Error("User not found");

    return user;
};

export const updateUserProfile = async (userId, updateData) => {

    const allowedUpdates = ["username"];

    const updates = {};

    object.keys(updateData).forEach((key) => {
        if (allowedUpdates.includes(key)) {
            updates[key] = updateData[key];
        }
    });

    const updatedUser = await User.findByIdAndUpdate(
        userId, updates, {
            new: true, runValidators: true
        }
    ).select("-password");

    if (!updatedUser) throw new Error("User not found");

    return updatedUser;
};

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
    
