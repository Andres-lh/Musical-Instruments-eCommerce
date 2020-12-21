import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className = "card-container">
            <div className="card-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="card-title">
               <h1>{props.title}</h1> 
            </div>
            <div className="card-description">
                <div className="card-price">
                    <p>{props.price}</p>
                </div>
                <div className="card-cart">
                    <p>bla</p>
                </div>
            </div>  
        </div>
    )
}

export default Card
