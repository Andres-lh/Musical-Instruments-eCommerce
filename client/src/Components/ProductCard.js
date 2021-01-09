import React, { useEffect} from "react";
import "./Styles/ProductCard.css";
import { Link } from "react-router-dom";
import Rating from './Rating';

function ProductCard(props) {
    const { product } = props;
    return (
        <div className="card-container">
            <div className="product-image">
                <Link to={`/products/${product._id}`}>
                    <img src={product.image} alt="" />
                </Link>
            </div>

            <div className="card-body">
                <div className="product-bla">
                    <Link to={`/products/${product._id}`} className="product-name">
                        <p>{product.name}</p>
                    </Link>
                    <Rating rating = {product.rating} numReviews = {product.numReviews} />
                </div>
                <div className="product price">
                    <span>{`$ ${product.price}`}</span>
                </div>
            </div>
            <Link to={`/products/${product._id}`}>
                <button className="card-button">
                    Quick view
                </button>
            </Link>
        </div>
    );
}

export default ProductCard;
