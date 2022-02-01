import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreweriesList from "../components/breweries/BreweriesList";
import BreweryFilters from "../components/filters/BreweryFilters";

function Breweries(props) {

    const [breweries, setBreweries] = useState([]);

    function fetchBreweries() {
        axios.get('https://api.openbrewerydb.org/breweries')
        .then(function (response) {
            setBreweries(response.data);
        });
    }

    useEffect(() => {
        fetchBreweries();
    }, []);

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <BreweryFilters />
                    </Col>
                    <Col md={8}>
                        <BreweriesList  breweries={breweries}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Breweries;