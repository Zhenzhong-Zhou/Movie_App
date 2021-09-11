import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import moviesRoutes from "./routes/movies.js";
import listsRoutes from "./routes/lists.js";

const app = express();
dotenv.config();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/movies", moviesRoutes);
app.use("/api/lists", listsRoutes);

// Server listen and connect to MongoDB
const PORT = process.env.PORT;
mongoose.connection.once("open", () => console.log("Connected to MongoDB..."));
mongoose.connect(process.env.DATABASE_URL)
	.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log(error));