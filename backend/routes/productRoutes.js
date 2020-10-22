import express from "express";
import Product from "../model/Product.js";
const productRoutes = express.Router();

productRoutes.get("/", async (req, res, next) => {
	try {
		const products = await Product.find({});
		res.json(products);
	} catch (error) {
		console.log(`Error -->  ${error}`);
		next(error);
	}
});

productRoutes.get("/:id", async (req, res, next) => {
	try {
		const selectedProduct = await Product.findById(req.params.id);
		if (selectedProduct) res.json(selectedProduct);
		else {
			res.status = 404;
			throw new Error("Sorry Product not found");
		}
	} catch (error) {
		console.log(`Error -->  ${error}`);
		next(error);
	}
});

export default productRoutes;
