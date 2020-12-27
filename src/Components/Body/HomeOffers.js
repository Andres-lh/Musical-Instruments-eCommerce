import React from 'react';
import './HomeOffers.css';
import { Button } from './Button';

function HomeOffers() {
    return (
        <div className="offers-container">
            <div className="offers-background">
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
