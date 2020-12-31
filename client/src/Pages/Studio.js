import React from 'react';
import './Styles/ProductPages.css';
import data from '../data/data';
import ProductCard from '../Components/ProductCard';

function Studio() {
    return (
        <div className = "product-pages">
            <h1 className = "product-title">Studio and Production</h1>
            <div className = "products-container">
                {data.studio.map( product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            
        </div>
    )
}

export default Studio;
