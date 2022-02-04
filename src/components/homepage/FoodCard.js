import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import { useHomepage } from "./HomepageContext";

function FoodCard(props) {
    
    const [theme] = useTheme();

    const {
        foodImageUrl, 
        fetchFoodImage, 
    } = useHomepage();

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