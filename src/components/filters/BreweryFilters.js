import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import { useBrewery } from "../breweries/BreweryContext";
import SelectType from "./SelectType";
import BreweriesPerPage from "./BreweriesPerPage";

function BreweryFilters(props) {

    const [theme] = useTheme();
    const {selectedType, breweriesPerPage, fetchBreweries} = useBrewery();
    const [nameFilter, setNameFilter] = useState("");
    const [cityFilter, setCityFilter] = useState("");
    const [stateFilter, setStateFilter] = useState("");

    useEffect(() => {
        fetchBreweries();
    }, []);

    function setFilters(element) {
        if (element.target.name === "filterByName") {
            setNameFilter(element.target.value);
        }

        if (element.target.name === "filterByCity") {
            setCityFilter(element.target.value);
        }
        
        if (element.target.name === "filterByState") {
            setStateFilter(element.target.value);
        }
    }

    function onFormSubmit(form) {
        form.preventDefault();
        getBreweries();

        console.log(selectedType);
        console.log(nameFilter);
        console.log(cityFilter);
        console.log(stateFilter);
        console.log(breweriesPerPage);
    }

    function getBreweries() {
        if (selectedType === "none") {
            fetchBreweries({
                "by_name": nameFilter,
                "by_city": cityFilter,
                "by_state": stateFilter,
                "per_page": breweriesPerPage,
            });
        } else {
            fetchBreweries({
                "by_name": nameFilter,
                "by_city": cityFilter,
                "by_state": stateFilter,
                "by_type": selectedType,
                "per_page": breweriesPerPage,
            });
        }
    }

    return (
        <Form 
            onSubmit={onFormSubmit}
            className={ `filter-form ${theme ? 'dark-theme' : ''}` } >
            <h5>Filter By</h5>
            <Form.Group className="filter-form-group" controlId="formBreweryName">
                <Form.Label>Brewery Name</Form.Label>
                <Form.Control 
                    name="filterByName" 
                    type="text" 
                    placeholder="E.g. 101 Brewery" 
                    onChange={setFilters} />
            </Form.Group>
            <Form.Group className="filter-form-group" controlId="formBreweryCity">
                <Form.Label>Brewery City</Form.Label>
                <Form.Control 
                    name="filterByCity" 
                    type="text" 
                    placeholder="E.g. Portland"
                    onChange={setFilters} />
            </Form.Group>
            <Form.Group className="filter-form-group" controlId="formBreweryState">
                <Form.Label>Brewery State</Form.Label>
                <Form.Control 
                    name="filterByState" 
                    type="text" 
                    placeholder="E.g. Idaho"
                    onChange={setFilters} />
            </Form.Group>
            <SelectType />
            <BreweriesPerPage />
            <Button variant="success" type="submit">Filter breweries</Button>
        </Form>
    )
}

export default BreweryFilters;