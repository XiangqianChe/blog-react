import React from "react";
import { Container, Row } from "react-bootstrap";
import CardPost from "../components/CardPost";

function Home(props) {
    return (
        <Container>
            <div>Latest Post</div>
            <Row>
                <CardPost />
            </Row>
        </Container>
    );
}

export default Home;