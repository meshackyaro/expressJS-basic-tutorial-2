import { z } from "zod";

export const getUserProfileSchema = z.object({
    userId: z.string().min(1, "User ID is required")
});

export const updateProfileSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    // password: z.string().min(6, "Password must be at least 6 characters long")
});

export const changePasswordSchema = z.object({
    
});