import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function toggleList(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setBreweries(value) {
    return {
        type: actionTypes.SET_BREWERIES,
        payload: value,
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