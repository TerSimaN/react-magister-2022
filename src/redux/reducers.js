import { combineReducers } from "redux";
import actionTypes from "./action-types";

export function list(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_LIST_VIEW:
            return action.payload;
        default:
            return state;
    }
}

export function darkTheme(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_DARK_THEME:
            return action.payload;
        default:
            return state;
    }
}

export function foodImage(state = "", action) {
    switch (action.type) {
        case actionTypes.SET_FOOD_IMAGE:
            return action.payload;
        default:
            return state;
    }
}

export function breweries(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_BREWERIES:
            return [...action.payload];
        case actionTypes.SET_RANDOM_BREWERY:
            return action.payload;
        default:
            return state;
    }
}

export function randomPage(state = 1, action) {
    switch (action.type) {
        case actionTypes.SET_RANDOM_PAGE:
            return action.payload;
        default:
            return state;
    }
}

export function nameFilter(state = "", action) {
    switch (action.type) {
        case actionTypes.SET_BREWERY_NAME:
            return action.payload;
        default:
            return state;
    }
}

export function cityFilter(state = "", action) {
    switch (action.type) {
        case actionTypes.SET_BREWERY_CITY:
            return action.payload;
        default:
            return state;
    }
}

export function stateFilter(state = "", action) {
    switch (action.type) {
        case actionTypes.SET_BREWERY_STATE:
            return action.payload;
        default:
            return state;
    }
}

export function breweriesPerPage(state = 20, action) {
    switch (action.type) {
        case actionTypes.SET_BREWERIES_PER_PAGE:
            return action.payload;
        default:
            return state;
    }
}

export function selectedType(state = "none", action) {
    switch (action.type) {
        case actionTypes.SET_SELECTED_TYPE:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    list,
    darkTheme,
    foodImage,
    breweries,
    randomPage,
    breweriesPerPage,
    selectedType,
    nameFilter,
    cityFilter,
    stateFilter,
});