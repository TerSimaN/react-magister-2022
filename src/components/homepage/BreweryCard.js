import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import { useHomepage } from "./HomepageContext";

function BreweryCard(props) {

    const [theme] = useTheme();
    
    const {
        randomBrewery, 
        fetchRandomBrewery, 
    } = useHomepage();

    return (
        <>
            <Col md={3}>
                <Card className="card-home-element"
                    bg={theme ? "dark" : "light"} 
                    text={theme ? "light" : "dark"}>
                    <Card.Header as="h5" className="card-home-element-header position-relative">
                        Brewery: "{randomBrewery.name}"
                        <FontAwesomeIcon 
                            className="change-icon mt-2 me-2 position-absolute top-0 end-0"
                            onClick={fetchRandomBrewery} 
                            icon={faSyncAlt} 
                            title="Change brewery" />
                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            Type: "{randomBrewery.brewery_type}"
                        </ListGroupItem>
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            City: {randomBrewery.city}
                        </ListGroupItem>
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            State: {randomBrewery.state === null ? "None" : randomBrewery.state}
                        </ListGroupItem>
                        <ListGroupItem variant={theme ? "dark" : "light"}>
                            Country: {randomBrewery.country}
                        </ListGroupItem>
                        <ListGroupItem className="list-group-item-link"
                            variant={theme ? "dark" : "light"}>
                            <Card.Link href={randomBrewery.website_url}>
                                Website Link
                            </Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </>
    )
}

export default BreweryCard;