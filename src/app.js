import express from "express";
import { errorHandler } from "./middlewares/error.middleware.js";
import { requestLogger } from "./middlewares/logger.middleware.js";
import routes from "./routes/index.js";

export const app = express();

// built-in middleware to parse JSON request body
app.use(express.json());

// custom middleware to log each request (MUST BE PLACED BEFORE ROUTES)
app.use(requestLogger);

// ROUTES: buit-in middleware to parse urlencoded request body
app.use("/api/", routes);

// error handling middleware (ALWAYS AT THE END)
app.use(errorHandler);