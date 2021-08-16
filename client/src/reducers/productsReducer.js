import { FETCH_PRODUCTS } from '../constants/actionTypes';

const productsReducer = (state = {products: []}, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return { ...state, products: action.data }
        default:
            return state
    }
}

export default productsReducer;