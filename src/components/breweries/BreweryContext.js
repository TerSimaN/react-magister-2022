import React, { useContext, useState } from "react";

// import axios from "axios";
// import constants from "../../constants";

const BreweryContext = React.createContext();

export function useBrewery() {
    return useContext(BreweryContext);
}

export function BreweryProvider(props) {
    
    const [selectedType, setSelectedType] = useState("none");
    const [breweriesPerPage, setBreweriesPerPage] = useState(20);

    // const [breweries, setBreweries] = useState([]);

    // function fetchBreweries(params) {
    //     axios.get(`${constants.breweriesBaseUrl}`, {
    //         params: {...params}
    //     })
    //     .then(function (response) {
    //         setBreweries(response.data);
    //     });
    // }
    
    return (
        <>
            <BreweryContext.Provider value={{
                selectedType,
                setSelectedType,
                breweriesPerPage,
                setBreweriesPerPage,
            }}>
                {props.children}
            </BreweryContext.Provider>
        </>
    )
}