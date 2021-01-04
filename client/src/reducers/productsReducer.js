import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../actions/constants';

export const productListReducer = (
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

export const productDetailsReducer = ( 
    state = { loading: true, product: {} },
    action
    ) => {
        switch (action.type) {
            case PRODUCT_DETAILS_REQUEST:
                return {
                    ...state,
                    loading: true,
                };
            case PRODUCT_DETAILS_SUCCESS:
                return {
                    loading: false,
                    product: action.payload,
                    error: "",
                };
            case PRODUCT_DETAILS_FAIL:
                return {
                    loading: false,
                    product: {},
                    error: action.payload,
                };
            default:
                return state;
        }
    }