import React from "react";
import Card from "../Body/Card";
import "./Section.css";

function Section() {
    return (
        <div className="section-container">
            <h1 className = "section-title">Featured items</h1>
            <div className='section-grid'>
                <Card
                    title="bla"
                    image="https://www.ecured.cu/images/0/0e/Bateria_%28instrumento_musical%29.jpeg"
                    text="blablabla"
                    price="212.245"
                />
                <Card
                    title="bla"
                    image="https://www.ecured.cu/images/0/0e/Bateria_%28instrumento_musical%29.jpeg"
                    text="blablabla"
                    price="212.245"
                />
                <Card
                    title="bla"
                    image="https://www.ecured.cu/images/0/0e/Bateria_%28instrumento_musical%29.jpeg"
                    text="blablabla"
                    price="212.245"
                />
                <Card
                    title="bla"
                    image="https://www.ecured.cu/images/0/0e/Bateria_%28instrumento_musical%29.jpeg"
                    text="blablabla"
                    price="212.245"
                />
              
                
           
            </div>
        </div>
    );
}

export default Section;
