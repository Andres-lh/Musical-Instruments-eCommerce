import { combineReducers } from 'redux';

import {productsReducer, productsDetailsReducer} from './productsReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

export default combineReducers({
    products: productsReducer, 
    product: productsDetailsReducer, 
    cart: cartReducer,
    auth: authReducer
});