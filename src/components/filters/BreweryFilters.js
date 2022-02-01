import { Button, Form } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import SelectType from "./SelectType";

function BreweryFilters(props) {

    const [theme] = useTheme();

    return (
        <Form 
            className="filter-form" 
            style={{
                backgroundColor: theme ? "black" : "", 
                color: theme ? "white" : "black",
                borderColor: theme ? "black" : "lightgray",
            }}>
            <h5>Filter By</h5>
            <Form.Group className="filter-form-group" controlId="formBreweryName">
                <Form.Label>Brewery Name</Form.Label>
                <Form.Control type="text" placeholder="E.g. 101 Brewery" />
            </Form.Group>
            <Form.Group className="filter-form-group" controlId="formBreweryCity">
                <Form.Label>Brewery City</Form.Label>
                <Form.Control type="text" placeholder="E.g. Portland" />
            </Form.Group>
            <Form.Group className="filter-form-group" controlId="formBreweryState">
                <Form.Label>Brewery State</Form.Label>
                <Form.Control type="text" placeholder="E.g. Idaho" />
            </Form.Group>
            <SelectType />
            <Button variant="success" type="submit">Filter breweries</Button>
        </Form>
    )
}

export default BreweryFilters;