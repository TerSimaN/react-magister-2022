import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getFoodImage, getRandomBrewery } from "../../redux/actions";

function HomepageTitle(props) {
    
    const page = useSelector((state) => state.randomPage);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFoodImage();
        fetchRandomBrewery();
    }, []);

    function fetchFoodImage() {
        dispatch(getFoodImage());
    }

    function fetchRandomBrewery() {
        dispatch(getRandomBrewery(page));
    }

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