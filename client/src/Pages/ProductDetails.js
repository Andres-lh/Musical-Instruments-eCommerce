import React, { useEffect } from 'react';
import './Styles/ProductDetails.css';
import Rating from '../Components/Rating';
import {Button} from '../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/actions';

function ProductDetails(props){

    const dispatch = useDispatch();
    const { id, category} = props.match.params;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, product, error} = productDetails;
    console.log(productDetails)

    useEffect(() => {
        dispatch(getProductDetails(id, category))
    }, [dispatch, id, category])
   

    return (
        <>
            {loading ? (
                <h1 className="product-pages">loading...</h1>
            ) : error ? (
                <h1 className="product-pages">{error}</h1>
            ) : (
                <div className="product-details-container">
                    <div className="product-details-grid">
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <h2>
                                {" "}
                                Price: <span>${product.price}</span>
                            </h2>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            />
                            <div className="product-details-btns">
                                <input
                                    type="number"
                                    placeholder="1"
                                    min="1"
                                    max="20"
                                />
                                <Button
                                    className="btns"
                                    buttonStyle="btn-primary"
                                    buttonSize="btn-large"
                                    path="/cart"
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


export default ProductDetails;
