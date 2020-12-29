import React from 'react';
import './Styles/ProductPages.css';
import data from '../data/data';
import ProductCard from '../Components/Body/ProductCard';

function Keyboards() {
    return (
        <div className = "product-pages">
            <h1 className = "product-title">Keyboards</h1>
            <div className = "products-container">
                {data.keyboards.map( product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            
        </div>
    )
}

export default Keyboards;
