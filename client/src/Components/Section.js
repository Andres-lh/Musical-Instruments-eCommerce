import React from "react";
import ProductCard from "./ProductCard";
import "./Styles/Section.css";
import Aos from 'aos';
import 'aos/dist/aos.css'


function Section(props) {
    Aos.init({ duration: 1000 });
    const { products } = props;
    return (
        <div data-aos="fade-up" className="section-container">
            <h1 className="section-title">Featured items</h1>
            <div className="section-grid">
                {products.featured.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                        ></ProductCard>
                    );
                })}
            </div>
        </div>
    );
}

export default Section;
