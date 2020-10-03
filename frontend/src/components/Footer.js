import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-2">
                        <p>copyright &copy; jbm</p>      
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;
