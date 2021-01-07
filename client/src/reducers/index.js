import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productDetailsReducer, productListReducer } from './productsReducer';

export default combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})