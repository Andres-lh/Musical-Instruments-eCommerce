import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
import './Styles/Cart.css';

function Cart(props) {
    const id = props.match.params.id;
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    useEffect(() => {
        if(id){
            dispatch(addToCart(id, quantity))
        }
    }, [dispatch, id, quantity])
    
    return (
        <div className="cart">
            <h1>Cart</h1>
            <p>product id: {id} quantity {quantity}</p>
        </div>
    )
}

export default Cart;
