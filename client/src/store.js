import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
    cart: {
        cartItems: localStorage.getItem('items')
            ? JSON.parse(localStorage.getItem('items'))
            : []
    }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    INITIAL_STATE,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;