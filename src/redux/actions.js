import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function toggleList(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function toggleTheme(value) {
    return {
        type: actionTypes.SET_DARK_THEME,
        payload: value,
    }
}

export function setFoodImage(iamge) {
    return {
        type: actionTypes.SET_FOOD_IMAGE,
        payload: iamge,
    }
}

export function setBreweries(value) {
    return {
        type: actionTypes.SET_BREWERIES,
        payload: value,
    }
}

export function setRandomBrewery(value) {
    return {
        type: actionTypes.SET_RANDOM_BREWERY,
        payload: value,
    }
}

export function setRandomPage(page) {
    return {
        type: actionTypes.SET_RANDOM_PAGE,
        payload: page,
    }
}

export function setNameFilter(breweryName) {
    return {
        type: actionTypes.SET_BREWERY_NAME,
        payload: breweryName,
    }
}

export function setCityFilter(breweryCity) {
    return {
        type: actionTypes.SET_BREWERY_CITY,
        payload: breweryCity,
    }
}

export function setStateFilter(breweryState) {
    return {
        type: actionTypes.SET_BREWERY_STATE,
        payload: breweryState,
    }
}

export function setBreweriesPerPage(perPage) {
    return {
        type: actionTypes.SET_BREWERIES_PER_PAGE,
        payload: perPage,
    }
}

export function setSelectedType(selectedType) {
    return {
        type: actionTypes.SET_SELECTED_TYPE,
        payload: selectedType,
    }
}

export function getFoodImage() {
    return async (dispatch) => {
        try {
            axios.get(`${constants.foodsBaseUrl}`)
            .then(function (response) {
                dispatch(setFoodImage(response.data.image));
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getBreweries(params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.breweriesBaseUrl}`, {
                params: {...params}
            })
            .then(function (response) {
                dispatch(setBreweries(response.data));
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getRandomBrewery(page) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.breweriesBaseUrl}`, {
                params: {
                    "per_page": 1,
                    "page": page
                }
            })
            .then(function (response) {
                response.data.map((breweryData) => {
                    dispatch(setRandomBrewery(breweryData));
                });
            });
        } catch (error) {
            console.log(error);
        }
    }
}