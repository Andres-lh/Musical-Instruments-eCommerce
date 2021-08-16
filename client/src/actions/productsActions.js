import { FETCH_PRODUCTS } from '../constants/actionTypes';
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