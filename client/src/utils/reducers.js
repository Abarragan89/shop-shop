// Import reducer from react
import { useReducer } from 'react';
// Import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
    switch(action.type) {
        // if action type value is the value of 'UPDATE_PRODUCTS' return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        // if action type value is the value 'UPDATE_CATEGORIES' return a new state object with an updated categoires array
        case UPDATE_CATEGORIES: 
            return {
                ...state,
                categories: [...action.categories]
            };
        // if action type value is 'UPDATE_CURRENT_CATEGORY' return a new state object with updated current category
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }
        // if it's none of these actions, do not update state at all and keep things the same
        default:
            return state;
    }
};

export function useProductReducer(intialState) {
    return useReducer(reducer, intialState);
}