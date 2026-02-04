import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 3
    
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"]
        },

        password: {
            type: String,
            required: true,
            trim: true,
            minLength: [6, "Password must be at least 6 characters long"]
        }
    
    }, 
        {
            timestamps: true
        }
);

export const User = mongoose.model("User", UserSchema);