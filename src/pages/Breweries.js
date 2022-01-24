import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BreweriesListItem from "../components/breweries/BreweriesListItem";
import BreweriesGridItem from "../components/breweries/BreweriesGridItem";

function Breweries(props) {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBreweryCity">
                                <Form.Label>Brewery City</Form.Label>
                                <Form.Control type="text" placeholder="Enter city" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBreweryName">
                                <Form.Label>Brewery Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBreweryState">
                                <Form.Label>Brewery State</Form.Label>
                                <Form.Control type="text" placeholder="Enter state" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSelectBreweryType">
                                <Form.Label>Select Brewery Type</Form.Label>
                                <Form.Select>
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
                    <Col md={6}>
                        <Row>
                            <BreweriesGridItem />
                            <BreweriesListItem />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Breweries;