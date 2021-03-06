import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setNameFilter, setCityFilter, setStateFilter, getBreweries } from "../../redux/actions";
import SelectType from "./SelectType";
import BreweriesPerPage from "./BreweriesPerPage";

function BreweryFilters(props) {

    const theme = useSelector((state) => state.darkTheme);
    const breweriesPerPage = useSelector((state) => state.breweriesPerPage);
    const selectedType = useSelector((state) => state.selectedType);
    const nameFilter = useSelector((state) => state.nameFilter);
    const cityFilter = useSelector((state) => state.cityFilter);
    const stateFilter = useSelector((state) => state.stateFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchBreweries();
    }, []);

    function onFormSubmit(form) {
        form.preventDefault();
        fetchBreweries();
    }

    function fetchBreweries() {
        if (selectedType === "none") {
            dispatch(getBreweries({
                "by_name": nameFilter,
                "by_city": cityFilter,
                "by_state": stateFilter,
                "per_page": breweriesPerPage,
            }));
        } else {
            dispatch(getBreweries({
                "by_name": nameFilter,
                "by_city": cityFilter,
                "by_state": stateFilter,
                "by_type": selectedType,
                "per_page": breweriesPerPage,
            }));
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
                    onChange={(element) => {dispatch(setNameFilter(element.target.value))}} />
            </Form.Group>
            <Form.Group className="filter-form-group" controlId="formBreweryCity">
                <Form.Label>Brewery City</Form.Label>
                <Form.Control 
                    name="filterByCity" 
                    type="text" 
                    placeholder="E.g. Portland"
                    onChange={(element) => {dispatch(setCityFilter(element.target.value))}} />
            </Form.Group>
            <Form.Group className="filter-form-group" controlId="formBreweryState">
                <Form.Label>Brewery State</Form.Label>
                <Form.Control 
                    name="filterByState" 
                    type="text" 
                    placeholder="E.g. Idaho"
                    onChange={(element) => {dispatch(setStateFilter(element.target.value))}} />
            </Form.Group>
            <SelectType />
            <BreweriesPerPage />
            <Button variant="success" type="submit">Filter breweries</Button>
        </Form>
    )
}

export default BreweryFilters;