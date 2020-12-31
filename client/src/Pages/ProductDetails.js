import React from 'react';
import './Styles/ProductDetails.css';
import data from '../data/data';
import Rating from '../Components/Rating';
import {Button} from '../Components/Button';

function ProductDetails(props){
    const {category, id} = props.match.params;

    const product = data[`${category}`].find(item => item.id === parseInt(id))

    return (
        <div className = "product-details-container">
            <div className="product-details-grid">
                <img src={product.image} alt={product.name}/>
                <div className ="product-details">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h2> Price: <span>${product.price}</span></h2>
                    <Rating rating = {product.rating} numReviews = {product.numReviews}/>
                    <div className = "product-details-btns">
                        <input  type="number" placeholder = "1" min="1" max="20"/>
                        <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large' path="/cart">Add to cart</Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
