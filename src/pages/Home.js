import { Container, Row } from "react-bootstrap";
import HomepageTitle from "../components/homepage/HomepageTitle";
import FoodCard from "../components/homepage/FoodCard";
import BreweryCard from "../components/homepage/BreweryCard";

function Home(props) {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <HomepageTitle />
                </Row>
                <Row className="justify-content-md-center">
                    <FoodCard />
                    <BreweryCard />
                </Row>
            </Container>
        </>
    )
}

export default Home;