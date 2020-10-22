import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import products from "./data/products.js";
import customers from "./data/customers.js";
import User from "./model/UserModel.js";
import Product from "./model/Product.js";
import Order from "./model/Order.js";

dotenv.config();
dbConnect();

const importData = async () => {
	console.log("sa");
	try {
		await Product.deleteMany();
		await User.deleteMany();
		await Order.deleteMany();
		const insertUsers = await User.insertMany(customers);
		const adminUser = insertUsers[0]._id;
		const productsList = products.map((product) => {
			return { ...product, addedBy: adminUser };
		});
		await Product.insertMany(productsList);
		console.log("Sample data added successfully...!");
		process.exit();
	} catch (error) {
		console.log(`DB Error : ${error}`);
		process.exit(1);
	}
};

const deleteData = async () => {
	try {
		await Product.deleteMany();
		await User.deleteMany();
		await Order.deleteMany();
		console.log("Sample data deleted successfully...!");
		process.exit();
	} catch (error) {
		console.log(`DB Error : ${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	deleteData();
} else {
	importData();
}
