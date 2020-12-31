import React from "react";
import "./Styles/ProductCard.css";
import { Link } from "react-router-dom";
import Rating from './Rating';

function ProductCard(props) {
    const { product } = props;

    return (
        <div className="card-container">
            <div className="product-image">
                <Link to={`/product/${product.category}/${product.id}`}>
                    <img src={product.image} alt="" />
                </Link>
            </div>

            <div className="card-body">
                <div className="product-bla">
                    <Link to={`/product/${product.category}/${product.id}`} className="product-name">
                        <p>{product.name}</p>
                    </Link>
                    <Rating rating = {product.rating} numReviews = {product.numReviews} />
                </div>
                <div className="product price">
                    <span>{`$ ${product.price}`}</span>
                </div>
            </div>
            <Link to="/">
                <button className="card-button" >
                    Add to cart
                </button>
            </Link>
        </div>
    );
}

export default ProductCard;
