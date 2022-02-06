import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getFoodImage } from "../../redux/actions";

function FoodCard(props) {
    
    const theme = useSelector((state) => state.darkTheme);

    const foodImageUrl = useSelector((state) => state.foodImage);

    const dispatch = useDispatch();
    
    function fetchFoodImage() {
        dispatch(getFoodImage());
    }

    return (
        <>
            <Col md={3}>
                <Card className="card-home-element"
                    bg={theme ? "dark" : "light"} 
                    text={theme ? "light" : "dark"}>
                    <Card.Header as="h5" 
                        className="position-relative" 
                        style={{ textAlign: 'center' }}>
                        {foodImageUrl.slice(41, foodImageUrl.lastIndexOf('/'))}
                        <FontAwesomeIcon 
                                className="change-icon mt-2 me-2 position-absolute top-0 end-0"
                                onClick={fetchFoodImage} 
                                icon={faSyncAlt} 
                                title="Change food" />
                    </Card.Header>
                    <Card.Img src={foodImageUrl} />
                </Card>
            </Col>
        </>
    )
}

export default FoodCard;