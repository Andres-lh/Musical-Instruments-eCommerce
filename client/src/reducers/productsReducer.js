import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL} from '../actions/constants';

export const productsReducer = (
    state = { loading: true, products: [], error: '' }, 
    action
    ) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            };
        case PRODUCTS_FAIL:
            return {
                loading: false,
                products: [],
                error: action.payload
            };
        default:
            return state;
    }
}