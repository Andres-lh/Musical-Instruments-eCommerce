import React, { useState } from "react";
import "./Slider.css";
import { Link } from "react-router-dom";
import { Button } from "../Body/Button";
import data from "../../data/data";

function Slider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <>
        <div className="slider-title">
            <h1>Best Sellers</h1>
        </div>
        <div className="slider-container">
            <div className="left-side">
                <div className="slider-product-name">
                    {data.products.map((slide, index) => {
                        return (
                            <div className={index === current ? "slide active" : "slide"} key={index}>
                                 {index ===  current && (
                                 <div>
                                    <h1 className="slide-name">{slide.name}</h1>
                                 </div>
                                 )}  
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="right-side">
                <i class="fas fa-chevron-left" onClick={prevSlide}/>
                {data.products.map((slide, index) => {
                    return ( 
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index ===  current && (<img src={slide.image} alt=""  className="slide-image" /> )}  
                        </div>
                    );
                })}
                <i class="fas fa-chevron-right" onClick={nextSlide}/>
            </div>
        </div>
        </>
    );
}

export default Slider;
