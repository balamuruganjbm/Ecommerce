import React from "react";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem,
} from "react-bootstrap";
import products from "../products";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
function ProductPage({ match }) {
	const selectedProduct = products.find((pdt) => pdt._id === match.params.id);
	return (
		<>
			<Link className="btn btn-primary my-3" to="/">
				<i className="fas fa-arrow-circle-left mr-2"></i>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={selectedProduct.image} alt={selectedProduct.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h4>{selectedProduct.name}</h4>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={selectedProduct.rating}
								text={`${selectedProduct.numReviews} Reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>
							Price: &#x20B9; {selectedProduct.price}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup varient="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>&#x20B9; {selectedProduct.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										<span style={{ color: "red" }}>
											{selectedProduct.countInStock > 0
												? "In Stock"
												: "Out Of Stock"}
										</span>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroupItem>
								<Button
									className="btn btn-block btn-primary"
									type="button"
									disabled={selectedProduct.countInStock === 0}
								>
									Add to Cart
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
			<Row className="my-3">
				<Col>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<strong>Description:</strong>
						</ListGroup.Item>
						<ListGroup.Item>{selectedProduct.description}</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
}

export default ProductPage;
