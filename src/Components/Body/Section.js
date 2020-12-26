import React from "react";
import ProductCard from "./ProductCard";
import data from "../../data/data";
import "./Section.css";


function Section() {
    return (
        <div className="section-container">
            <h1 className = "section-title">Featured items</h1>
            <div className='section-grid'>
                {data.products.map((product) => {
                    return <ProductCard key={product.id} product={product}></ProductCard>
                })}
            </div>
        </div>
    );
}

export default Section;
