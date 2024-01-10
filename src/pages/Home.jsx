import React from "react";
import { Container, Row } from "react-bootstrap";
import CardPost from "../components/CardPost";

function Home(props) {
    return (
        <Container>
            <h3>Latest Post</h3>
            <hr />
            <Row>
                <CardPost />
            </Row>
        </Container>
    );
}

export default Home;