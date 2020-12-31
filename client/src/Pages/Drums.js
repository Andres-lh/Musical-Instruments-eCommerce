import React from 'react';
import './Styles/ProductPages.css';
import data from '../data/data';
import ProductCard from '../Components/ProductCard';

function Drums() {
    return (
        <div className = "product-pages">
            <h1 className = "product-title">Drums</h1>
            <div className = "products-container">
                {data.drums.map( product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            
        </div>
    )
}

export default Drums;
