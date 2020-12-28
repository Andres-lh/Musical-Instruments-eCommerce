import React from 'react';
import './CategoryCard.css'

function CategoryCard(props) {
    return (
        <div className="category-card">
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default CategoryCard;
