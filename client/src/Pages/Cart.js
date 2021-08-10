import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem } from '../actions/actions';
import { Button } from '../Components/Button';
import './Styles/Cart.css';

function Cart(props) {
    const { cartItems } = useSelector(state => state.cart);
    const id = props.match.params.id;
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if(id){
            dispatch(addToCart(id, quantity))
        }
    }, [dispatch, id, quantity])

    const removeFromCart = (id) =>{
        dispatch(removeItem(id))
    }
    
    return (
        <div className="cart">
            <h1>Shopping cart</h1>
            {cartItems.length === 0 ? (
                <div className="cart-body">
                    <hr />
                    <h2>Your cart is empty</h2>
                    <div className="cart-btn">
                    <Button
                        className="btns"
                        buttonStyle="btn-alternative"
                        buttonSize="btn-large"
                        path="/"
                    >
                        Continue Shopping
                    </Button>
                    </div>
                    
                    <hr />
                </div>
            ) : (
                <div className="cart-body">
                    <div className="cart-grid-header">
                        <h2>Item</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Total</h2>
                    </div>
                    <hr />
                    <ul>
                        {cartItems.map((item) => (
                            <div>
                                <li key={item.product}>
                                    <div className="cart-grid">
                                        <div className="cart-product-image">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div>
                                            <h3>$ {item.price}</h3>
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                defaultValue={item.quantity}
                                                min="1"
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(
                                                            item.product,
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    )
                                                }
                                            />
                                        </div>
                                        <div>
                                            <h3>
                                                $ {item.price * item.quantity}
                                            </h3>
                                        </div>
                                        <div className="cart-button">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeFromCart(item.product)
                                                }
                                            >
                                                <i class="fas fa-times-circle red-button"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <div></div>
                            </div>
                        ))}
                    </ul>
                    <hr />
                    <div className="cart-subtotal">
                        <h2>
                            Subtotal : ${" "}
                            {cartItems.reduce(
                                (a, c) => a + c.price * c.quantity,
                                0
                            )}
                        </h2>

                        <button>Check out</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
