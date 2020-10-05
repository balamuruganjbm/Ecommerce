const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const products = require("./data/products");

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const selectedProduct = products.find((pdt) => pdt._id === req.params.id);
	res.json(selectedProduct);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} on PORT ${process.env.PORT}..!`,
	);
});
