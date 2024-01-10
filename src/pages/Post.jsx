import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Post(props) {
    const postData = useLocation();
    const { body, title } = postData.state;
    return (
        <>
            <Container>
                <h2>{title}</h2>
                <p>{body}</p>
            </Container>
        </>
    );
}

export default Post;