import { FETCH_PRODUCTS, PRODUCTS_DETAILS_REQUEST } from '../constants/actionTypes';
import * as api from '../api/api';

export const getProducts = (category, sort, search) => async(dispatch) => {
    try {
        const { data } = await api.fetchProducts(category, sort, search);
       dispatch({
           type: FETCH_PRODUCTS,
           data: data.products
       })
    } catch (error) {
        console.log(error);
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try {
        const { data } = await api.fetchProductDetails(id);
        dispatch({
            type: PRODUCTS_DETAILS_REQUEST,
            data: data.product
        })
    } catch (error) {
        console.log(error);
    }
}
