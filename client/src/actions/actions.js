import axios from 'axios';
import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CART_ADD_ITEM,
} from "./constants";

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

export const getProductDetails = (id) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: {id: id}
    });
    try {
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: [],
            error: error.mesagge
        })

    }
}

export const addToCart = (id, quantity) => async(dispatch, getState) =>{
    const {data} = await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price, 
            inStock: data.inStock,
            productId: data._id,
            quantity,
        }
    });
    localStorage.setItem('items', JSON.stringify(getState().cart.cartItems) )
}