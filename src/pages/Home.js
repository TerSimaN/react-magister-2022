import { Container, Row } from "react-bootstrap";
import { HomepageProvider } from "../components/homepage/HomepageContext";
import HomepageTitle from "../components/homepage/HomepageTitle";
import FoodCard from "../components/homepage/FoodCard";
import BreweryCard from "../components/homepage/BreweryCard";

function Home(props) {
    return (
        <>
            <HomepageProvider>
                <Container>
                    <Row className="justify-content-md-center">
                        <HomepageTitle />
                    </Row>
                    <Row className="justify-content-md-center">
                        <FoodCard />
                        <BreweryCard />
                    </Row>
                </Container>
            </HomepageProvider>
        </>
    )
}

export default Home;