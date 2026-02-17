import { z } from "zod";

export const getUserProfileSchema = z.object({
    userId: z.string().min(1, {message: "User ID is required"})
});

export const updateProfileSchema = z
    .object({
        username: z
        .string()
        .min(3, {message: "Username must be at least 3 characters long"})
        .max(18, {message: "Username must be at most 18 characters long"})
        .trim(),
    }).strict();

export const changePasswordSchema = z
    .object({
        currentPassword: z
        .string()
        .min(6, {message: "Old password is required"})
        .max(18, {message: "Old password must be at most 18 characters long"})
        .trim(),

        newPassword: z
        .string()
        .min(6, {message: "New password is required"})
        .max(18, {message: "New password must be at most 18 characters long"})
        .trim(),

        confirmPassword: z
        .string()
        .min(6, {message: "Confirm password is required"})
        .max(18, {message: "Confirm password must be at most 18 characters long"})
        .trim()
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });