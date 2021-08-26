import { FETCH_PRODUCTS, PRODUCTS_DETAILS_REQUEST } from '../constants/actionTypes';

export const productsReducer = (state = {products: []}, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return { ...state, products: action.data }
        default:
            return state
    }
}

export const productsDetailsReducer = (state = { product: {} }, action) => {
    switch(action.type){
        case PRODUCTS_DETAILS_REQUEST:
            return {...state, product : action.data}
        default:
            return state
    }
}