import axios from "axios";
import React, { useContext, useState } from "react";
import constants from "../../constants";

const HomepageContext = React.createContext();

export function useHomepage() {
    return useContext(HomepageContext);
}

export function HomepageProvider(props) {

    const [foodImageUrl, setFoodImageUrl] = useState("");
    const [randomBrewery, setRandomBrewery] = useState([]);
    const [randomPage, setRandomPage] = useState(1);

    function fetchFoodImage() {
        axios.get(`${constants.foodsBaseUrl}`)
        .then(function (response) {
            setFoodImageUrl(response.data.image);
        });
    }

    function fetchRandomBrewery() {
        getRandomPage();

        axios.get(`${constants.breweriesBaseUrl}`, {
            params: {
                "per_page": 1,
                "page": randomPage
            }
        })
        .then(function (response) {
            response.data.map((breweryData) => {
                setRandomBrewery(breweryData);
            });
        });
    }

    function getRandomPage() {
        setRandomPage(Math.floor(Math.random() * (1000 - 1) + 1));
    }

    return (
        <>
            <HomepageContext.Provider value={{
                foodImageUrl, 
                setFoodImageUrl,
                randomBrewery,
                setRandomBrewery,
                fetchFoodImage,
                fetchRandomBrewery,
            }}>
                {props.children}
            </HomepageContext.Provider>
        </>
    )
}