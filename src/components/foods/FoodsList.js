import { Button, Col, Form, Row } from "react-bootstrap";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FoodsGridItem from "./FoodsGridItem";
import FoodsListItem from "./FoodsListItem";

const foods = [
    {
        type: "Biryani",
        image: "https://foodish-api.herokuapp.com/images/biryani/biryani46.jpg"
    },
    {
        type: "Dosa",
        image: "https://foodish-api.herokuapp.com/images/dosa/dosa61.jpg"
    },
    {
        type: "Pizza",
        image: "https://foodish-api.herokuapp.com/images/pizza/pizza93.jpg"
    },
    {
        type: "Dessert",
        image: "https://foodish-api.herokuapp.com/images/dessert/dessert35.jpg"
    },
]

function FoodsList(props) {

    const [list, toggleList] = useState(false);

    function renderFoods() {
        return list ? getFoodsListItems() : getFoodsGridItems();
    }

    function getFoodsGridItems() {
        return foods.map((food, index) => {
            return <FoodsGridItem
                key={index}
                food={food} />
        })
    }

    function getFoodsListItems() {
        return foods.map((food, index) => {
            return <FoodsListItem
                key={index}
                food={food} />
        })
    }

    return (
        <>
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <h5>Filter By</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="foodSelectForm">
                            <Form.Label>Select food type</Form.Label>
                            <Form.Select>
                                <option value="biryani">Biryani</option>
                                <option value="burger">Burger</option>
                                <option value="butter-chicken">Butter-chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="dosa">Dosa</option>
                                <option value="idly">Idly</option>
                                <option value="pasta">Pasta</option>
                                <option value="pizza">Pizza</option>
                                <option value="rice">Rice</option>
                                <option value="samosa">Samosa</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="success" type="submit">Filter foods</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <Row>
                        <div className="d-flex justify-content-md-between">
                            <div className="p-2">
                                <h5>Foods Filter results</h5>
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
                        {renderFoods()}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default FoodsList;