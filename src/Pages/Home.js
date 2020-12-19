import React from 'react'
import Hero from '../Components/Body/Hero';
import Slider from '../Components/Body/Slider';
import { data } from "../data/data"

function Home() {
    return (
        <div className="home">
            <Hero/>
            <Slider slides={data}/>
        </div>

            
        
    )
}

export default Home
