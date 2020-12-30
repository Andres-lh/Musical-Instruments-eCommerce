import React from "react";
import ProductCard from "./ProductCard";
import data from "../../data/data";
import "./Section.css";
import Aos from 'aos';
import 'aos/dist/aos.css'


function Section() {

    Aos.init({duration: 1000})

    return (
        <div data-aos = "fade-up" className ="section-container">
            <h1 className = "section-title">Featured items</h1>
            <div className='section-grid'>
                {data.featured.map((product) => {
                    return <ProductCard key={product.id} product={product}></ProductCard>
                })}
            </div>
        </div>
    );
}

export default Section;
