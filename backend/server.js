import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import {
  errorHandler,
  notFound,
} from "../backend/middleware/errorMiddleware.js";
import productRoutes from "./routes/productsRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} at port :: ${PORT}`.yellow.bold
  );
});