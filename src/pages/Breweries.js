import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BreweriesList from "../components/breweries/BreweriesList";

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
                <BreweriesList  breweries={breweries}/>
            </Container>
        </>
    )
}

export default Breweries;