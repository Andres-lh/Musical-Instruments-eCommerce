import { combineReducers } from 'redux';
import { productDetailsReducer, productListReducer } from './productsReducer';

export default combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})