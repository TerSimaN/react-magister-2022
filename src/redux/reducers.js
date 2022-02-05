import actionTypes from "./action-types";
import { combineReducers } from "redux";

export function list(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_LIST_VIEW:
            return action.payload;
        default:
            return state;
    }
}

export function breweries(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_BREWERIES:
            return [...action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    list,
    breweries,
});