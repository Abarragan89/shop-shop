// used by ProductList; Store  the data retrieved for products in Apollo in Global State. This helps with offline functionality
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// Take the list of categories retrieved from Apollo server adn store it in Global State. Help with Offline capability
export const UPDATE_CATEGORIES = "UPDATE_CATEGORES";
// Connecting data from the two previous actions. Selecte a category from 'update_category' and display products for that category in the 'updated_products'
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
// Shopping Cart Action
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';