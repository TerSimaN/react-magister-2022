import { Form } from "react-bootstrap";
import { useBrewery } from "../breweries/BreweryContext";

function SelectType(props) {

    const typeOptions = [
        {
            value: "none",
            type: "No type"
        },
        {
            value: "micro",
            type: "Micro brewery"
        },
        {
            value: "nano",
            type: "Nano brewery"
        },
        {
            value: "regional",
            type: "Regional brewery"
        },
        {
            value: "brewpub",
            type: "Brewpub brewery"
        },
        {
            value: "large",
            type: "Large brewery"
        },
        {
            value: "planning",
            type: "Planning brewery"
        },
        {
            value: "bar",
            type: "Bar brewery"
        },
        {
            value: "contract",
            type: "Contract brewery"
        },
        {
            value: "closed",
            type: "Closed brewery"
        },
    ]

    const {selectedType, setSelectedType} = useBrewery();

    function getTypeOptions() {
        return typeOptions.map(typeOption => {
            return <option 
                key={typeOption.value}
                value={typeOption.value}>
                    {typeOption.type}
                </option>
        });
    }

    return (
        <>
            <Form.Group className="filter-form-group" controlId="formSelectBreweryType">
                <Form.Label>Select Brewery Type</Form.Label>
                <Form.Select 
                    value={selectedType}
                    onChange={element => setSelectedType(element.target.value)}>
                    {getTypeOptions()}
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default SelectType;