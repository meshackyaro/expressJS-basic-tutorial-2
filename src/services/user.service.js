import { object } from "zod";
import { User } from "../models/user.model.js";

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