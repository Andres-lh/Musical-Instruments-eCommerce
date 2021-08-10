import axios from 'axios';
import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
    
} from "./constants";

export const getProducts = (category, sort) => async (dispatch) =>{
    dispatch({
        type: PRODUCTS_REQUEST
    });
    try {
        const { data } = await axios.get(`/api/products?category=${category}&${sort}`);
        console.log(data)
        dispatch({
            type: PRODUCTS_SUCCESS,
            payload: data.products,
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
            payload: data.product
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
    console.log(data)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.product.name,
            image: data.product.image,
            price: data.product.price, 
            inStock: data.product.inStock,
            product: data.product._id,
            quantity,
        }
    });
    localStorage.setItem('items', JSON.stringify(getState().cart.cartItems) )
}

export const removeItem= (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload : id
    });

    localStorage.setItem('items', JSON.stringify(getState().cart.cartItems))
}