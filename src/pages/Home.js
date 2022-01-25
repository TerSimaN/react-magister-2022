import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function Home(props) {

    const [foodImageUrl, setFoodImageUrl] = useState("");

    function fetchFoodImage() {
        axios.get('https://foodish-api.herokuapp.com/api/')
        .then(function (response) {
            setFoodImageUrl(response.data.image);
        });
    }

    useEffect(() => {
        fetchFoodImage();
    }, []);

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h2 style={{ textAlign: 'center' }}>
                            Welcome to Food'n'Breweries
                        </h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={foodImageUrl} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>
                                    {foodImageUrl.slice(41, foodImageUrl.lastIndexOf('/'))}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header as="h5">Brewery: "12 Acres Brewing Company"</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroupItem>Type: "micro"</ListGroupItem>
                                <ListGroupItem>City: Killeshin</ListGroupItem>
                                <ListGroupItem>State: None</ListGroupItem>
                                <ListGroupItem>Country: Ireland</ListGroupItem>
                                <ListGroupItem style={{ textAlign: 'center' }}>
                                    <Card.Link href="https://12acresbrewing.ie/">Website Link</Card.Link>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;