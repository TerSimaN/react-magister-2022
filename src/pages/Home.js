import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useTheme } from "../ThemeContext";
import constants from "../constants";

function Home(props) {

    const [theme] = useTheme();
    const [foodImageUrl, setFoodImageUrl] = useState("");

    function fetchFoodImage() {
        axios.get(`${constants.foodsBaseUrl}`)
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
                        <h2 className="homepage-header">
                            Welcome to Food'n'Breweries
                        </h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <Card className="card-home-element"
                            bg={theme ? "dark" : "light"} 
                            text={theme ? "light" : "dark"}>
                            <Card.Body className="p-2 position-relative">
                                <FontAwesomeIcon 
                                    className="mt-2 me-2 position-absolute top-0 end-0"
                                    onClick={fetchFoodImage} 
                                    icon={faSyncAlt} 
                                    title="Change food"
                                    size="lg" />
                                <Card.Title style={{ textAlign: 'center' }}>
                                    {foodImageUrl.slice(41, foodImageUrl.lastIndexOf('/'))}
                                </Card.Title>
                            </Card.Body>
                            <Card.Img src={foodImageUrl} />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="card-home-element"
                            bg={theme ? "dark" : "light"} 
                            text={theme ? "light" : "dark"}>
                            <Card.Header as="h5">Brewery: "12 Acres Brewing Company"</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroupItem variant={theme ? "dark" : "light"}>Type: "micro"</ListGroupItem>
                                <ListGroupItem variant={theme ? "dark" : "light"}>City: Killeshin</ListGroupItem>
                                <ListGroupItem variant={theme ? "dark" : "light"}>State: None</ListGroupItem>
                                <ListGroupItem variant={theme ? "dark" : "light"}>Country: Ireland</ListGroupItem>
                                <ListGroupItem className="list-group-item-link"
                                     variant={theme ? "dark" : "light"}>
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