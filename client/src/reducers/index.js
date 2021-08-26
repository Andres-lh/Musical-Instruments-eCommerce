import { combineReducers } from 'redux';

import {productsReducer, productsDetailsReducer} from './productsReducer';

export default combineReducers({products: productsReducer, product: productsDetailsReducer});