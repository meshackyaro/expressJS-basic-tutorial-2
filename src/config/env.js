import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI
};