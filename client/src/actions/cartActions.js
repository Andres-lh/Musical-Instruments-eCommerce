import * as api from '../api/api';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/actionTypes';

export const addToCart = (id, quantity) => async (dispatch, getState) => {

    try {
        const { data } = await api.addCartItem(id);
        dispatch({
            type: CART_ADD_ITEM,
            data: {
                name: data.product.name,
                image: data.product.image,
                price: data.product.price, 
                inStock: data.product.inStock,
                product: data.product._id,
                quantity
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.log(error)
    }
}

export const removeItem = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: CART_REMOVE_ITEM,
            data: id
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

    } catch (error) {
        console.log(error)
    }

}