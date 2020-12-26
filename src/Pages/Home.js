import React, {Component} from 'react'
import Hero from '../Components/Body/Hero';
import Slider from '../Components/Body/Slider';
import Section from '../Components/Body/Section';
import Footer from '../Components/Body/Footer';
import data from "../data/data";


function Home() {
    return (
        <div className="home">
            <Hero/>
            <Section />
            <Slider slides={data.products}/>
            <Footer/>
            
        </div>

            
        
    )
}

export default Home
