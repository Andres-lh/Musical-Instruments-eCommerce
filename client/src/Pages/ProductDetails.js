import React, { useEffect, useState } from 'react';
import './Styles/ProductDetails.css';
import Rating from '../Components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/actions';

function ProductDetails(props){

    const dispatch = useDispatch();
    const id = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, product, error} = productDetails;
    const [ quantity, setQuantity] = useState(1)

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])

    const addToCart = () => {
        props.history.push(`/cart/${id}?qty=${quantity}`);
      };

    return (
        <>
            {loading ? (
                <h1 className="product-pages">loading...</h1>
            ) : error ? (
                <h1 className="product-pages">error</h1>
            ) : (
                <div className="product-details-container">
                    <div className="product-details-grid">
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <h2>
                                Price: <span>${product.price}</span>
                            </h2>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            />
                            {product.inStock > 0 ? (
                                <h4 className="product-available">In stock</h4>
                            ) : (
                                <h4 className="product-unavailable">Unavailable</h4>
                            )}
                            {product.inStock > 0 && (
                                <div className="product-details-btns">
                                    <input
                                        type="number"
                                        placeholder="1"
                                        min="1"
                                        max={product.inStock}
                                        onChange = {e => setQuantity(e.target.value)}
                                    />

                                    <button className="btn-red" onClick={addToCart}>
                                        Add to cart
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


export default ProductDetails;
