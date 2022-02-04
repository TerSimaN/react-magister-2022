import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useHomepage } from "./HomepageContext";

function HomepageTitle(props) {
    
    const {
        fetchFoodImage,
        fetchRandomBrewery,
    } = useHomepage();

    useEffect(() => {
        fetchFoodImage();
        fetchRandomBrewery();
    }, []);

    return (
        <>
            <Col md={6}>
                <h2 className="homepage-header">
                    Welcome to Food'n'Breweries
                </h2>
            </Col>
        </>
    )
}

export default HomepageTitle;