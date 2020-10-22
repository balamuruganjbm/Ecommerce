import express from "express";
import dotenv from "dotenv";
const app = express();
import dbConnect from "./config/db.js";
import productRoutes from "../backend/routes/productRoutes.js";
import { errorHandler, notFound } from "./helpers/errorHandlers.js";

//config
dotenv.config();
dbConnect();

//Routes
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} on PORT ${process.env.PORT}..!`,
	);
});
