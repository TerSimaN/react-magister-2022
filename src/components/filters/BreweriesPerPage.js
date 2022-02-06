import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setBreweriesPerPage } from "../../redux/actions";

function BreweriesPerPage(props) {

    const perPageOptions = [
        {
            value: 5,
        },
        {
            value: 10,
        },
        {
            value: 15,
        },
        {
            value: 20,
        },
        {
            value: 30,
        },
        {
            value: 50,
        },
    ]

    const breweriesPerPage = useSelector((state) => state.breweriesPerPage);
    const dispatch = useDispatch();

    function getPerPageOptions() {
        return perPageOptions.map(perPageOption => {
            return <option 
                key={perPageOption.value}
                value={perPageOption.value}>
                    {perPageOption.value}
                </option>
        });
    }

    return (
        <>
            <Form.Group className="filter-form-group" controlId="formSelectBreweriesPerPage">
                <Form.Label>Number of Breweries per Page</Form.Label>
                <Form.Select 
                    value={breweriesPerPage}
                    onChange={(element) => {dispatch(setBreweriesPerPage(element.target.value))}}>
                    {getPerPageOptions()}
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default BreweriesPerPage;