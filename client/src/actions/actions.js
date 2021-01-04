import axios from 'axios';
import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL } from './constants';

export const getProducts = () => async (dispatch) =>{
    dispatch({
        type: PRODUCTS_REQUEST
    });
    try {
        const { data } = await axios.get('/api/products');
        dispatch({
            type: PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error){
        dispatch({
            type: PRODUCTS_FAIL,
            payload: [],
            error: error.mesagge
        });
    }
};