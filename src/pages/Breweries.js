import { Col, Container, Row } from "react-bootstrap";
import BreweriesList from "../components/breweries/BreweriesList";
import BreweryFilters from "../components/filters/BreweryFilters";
import { BreweryProvider } from "../components/breweries/BreweryContext";

function Breweries(props) {
    return (
        <>
            <BreweryProvider>
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
            </BreweryProvider>
        </>
    )
}

export default Breweries;