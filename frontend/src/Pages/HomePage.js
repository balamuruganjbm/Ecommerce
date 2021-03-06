import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
function HomePage() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get(`/api/products`);
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);
	return (
		<>
			<h1>Our Products</h1>
			<Row>
				{products.map((product) => {
					return (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					);
				})}
			</Row>
		</>
	);
}

export default HomePage;
