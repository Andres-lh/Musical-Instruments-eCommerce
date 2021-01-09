import React, { useState } from "react";
import "./Styles/Slider.css";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'

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

    Aos.init({duration: 3000})

    return (
        <div data-aos = "fade-right">
        <div className="slider-title">
            <h1>Best Sellers</h1>
        </div>
        <div className="slider-container">
            <div className="left-side">
                <div className="slider-product-name">
                    {slides.map((slide, index) => {
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
                {slides.map((slide, index) => {
                    return ( 
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            <Link to={`/products/${slide._id}`}>
                                {index ===  current && (<img src={slide.image} alt=""  className="slide-image" /> )}
                            </Link>
                        </div>
                    );
                })}
                <i class="fas fa-chevron-right" onClick={nextSlide}/>
            </div>
        </div>
        </div>
    );
}

export default Slider;
