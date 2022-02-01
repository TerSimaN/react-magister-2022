import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";

function BreweriesGridItem({brewery}) {

    const [theme] = useTheme();

    return (
        <>
            <Col md={4}>
                <Card className="card-element"
                    bg={theme ? "dark" : "light"}
                    text={theme ? "light" : "dark"}>
                    <Card.Header as="h5">Brewery: "{brewery.name}"</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            Type: "{brewery.brewery_type}"
                        </ListGroupItem>
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            City: {brewery.city}
                        </ListGroupItem>
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            State: {brewery.state === null ? "None" : brewery.state}
                        </ListGroupItem>
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            Country: {brewery.country}
                        </ListGroupItem>
                        <ListGroupItem 
                            className="list-group-item-link"
                            variant={theme ? "dark" : "light"}>
                            <Card.Link href={brewery.website_url}>
                                Website Link
                            </Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </>
    )
}

export default BreweriesGridItem;