import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import BreweriesGridItem from "./BreweriesGridItem";
import BreweriesTableItem from "./BreweriesTableItem";

function BreweriesList({breweries}) {

    const [list, toggleList] = useState(false);

    function renderBreweries() {
        return list ? getBreweriesTable() : getBreweriesGridItems();
    }

    function getBreweriesGridItems() {
        return breweries.map((brewery) => {
            return <BreweriesGridItem 
                key={brewery.id}
                brewery={brewery} />
        })
    }

    function getBreweriesTable() {
        return (
            <>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Brewery Name</th>
                            <th>Type</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getBreweriesTableItems()}
                    </tbody>
                </Table>
            </>
        )
    }

    function getBreweriesTableItems() {
        return breweries.map((brewery) => {
            return <BreweriesTableItem 
            key={brewery.id}
            brewery={brewery} />
        })
    }

    return (
        <>
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <h5>Filter By</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBreweryName">
                            <Form.Label>Brewery Name</Form.Label>
                            <Form.Control type="text" placeholder="E.g. 101 Brewery" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBreweryCity">
                            <Form.Label>Brewery City</Form.Label>
                            <Form.Control type="text" placeholder="E.g. Portland" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBreweryState">
                            <Form.Label>Brewery State</Form.Label>
                            <Form.Control type="text" placeholder="E.g. Idaho" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSelectBreweryType">
                            <Form.Label>Select Brewery Type</Form.Label>
                            <Form.Select>
                                <option value="none">No type selected</option>
                                <option value="micro">Micro brewery</option>
                                <option value="nano">Nano brewery</option>
                                <option value="regional">Regional brewery</option>
                                <option value="brewpub">Brewpub brewery</option>
                                <option value="large">Large brewery</option>
                                <option value="planning">Planning brewery</option>
                                <option value="bar">Bar brewery</option>
                                <option value="contract">Contract brewery</option>
                                <option value="proprietor">Proprietor brewery</option>
                                <option value="closed">Closed brewery</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="success" type="submit">Filter breweries</Button>
                    </Form>
                </Col>
                <Col md={8}>
                    <Row>
                        <div className="d-flex justify-content-md-between">
                            <div className="p-2">
                                <h5>Breweries Filter results</h5>
                            </div>
                            <FontAwesomeIcon 
                                className="mt-2"
                                onClick={() => {toggleList(!list)}}
                                icon={list ? faTh : faList}
                                size="lg" 
                            />
                        </div>
                    </Row>
                    <Row>
                        {renderBreweries()}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default BreweriesList;