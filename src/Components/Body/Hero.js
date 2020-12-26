import React from 'react';
import './Hero.css';
import Video from '../../Assets/videos/drumVideo.mp4';
import {Button} from './Button';

function Hero() {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted/>
            <h1>Are you ready to rock?</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'>
                    Shop now
                </Button>
            </div>
        </div>
    )
}

export default Hero
