import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/actionTypes';

const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.data;
            const existItem = state.cartItems.find(i => i.product === item.product);

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === existItem.product ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [ ...state.cartItems, item ]
                };
            }
        
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== action.data)
            }
        
        default:
            return state;
    }
}

export default cartReducer;
