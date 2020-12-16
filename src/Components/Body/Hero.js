import React from 'react';
import './Hero.css';
import Video from '../../Assets/videos/drumVideo.mp4'

function Hero() {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted/>
            <h1>Are you ready to rock?</h1>
        </div>
    )
}

export default Hero
