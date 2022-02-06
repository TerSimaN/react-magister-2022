import { Col, Container, Row } from "react-bootstrap";
import BreweriesList from "../components/breweries/BreweriesList";
import BreweryFilters from "../components/filters/BreweryFilters";

function Breweries(props) {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <BreweryFilters />
                    </Col>
                    <Col md={8}>
                        <BreweriesList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Breweries;