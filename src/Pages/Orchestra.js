import React from 'react';
import './Styles/ProductPages.css';
import data from '../data/data';
import ProductCard from '../Components/Body/ProductCard';

function Orchestra() {
    return (
        <div className = "product-pages">
            <h1 className = "product-title">Band and Orchestra</h1>
            <div className = "products-container">
                {data.orchestra.map( product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            
        </div>
    )
}

export default Orchestra;
