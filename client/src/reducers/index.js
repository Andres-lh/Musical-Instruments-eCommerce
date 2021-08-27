import { combineReducers } from 'redux';

import {productsReducer, productsDetailsReducer} from './productsReducer';
import { cartReducer } from './cartReducer';

export default combineReducers({
    products: productsReducer, 
    product: productsDetailsReducer, 
    cart: cartReducer
});