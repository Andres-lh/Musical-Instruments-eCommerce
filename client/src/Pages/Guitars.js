import React from 'react';
import './Styles/ProductPages.css';
import data from '../data/data';
import ProductCard from '../Components/ProductCard';

function Guitars() {
    return (
        <div className = "product-pages">
            <h1 className = "product-title">Guitars</h1>
            <div className = "products-container">
                {data.guitars.map( product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            
        </div>
    )
}

export default Guitars;
