import React from "react";
import { Col, Card, Button } from "react-bootstrap";

function CardPost(props) {
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>                        <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default CardPost;
