import { Container } from "react-bootstrap";
import FoodsList from "../components/foods/FoodsList";

function Foods(props) {
    return (
        <>
            <Container>
                <FoodsList />
            </Container>
        </>
    )
}

export default Foods;