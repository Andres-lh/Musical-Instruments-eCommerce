import React from 'react';
import './Styles/HomeOffers.css';
import { Button } from './Button';
import Aos from 'aos';
import 'aos/dist/aos.css'

function HomeOffers() {

    Aos.init({duration: 2000})

    return (
        <div className="offers-container">
            <div data-aos = "fade-left" className="offers-background">
                <div className="offers-content">
                    <h1>Check out our special offers</h1>
                    <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large'>
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomeOffers;
