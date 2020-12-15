import React, {useState} from 'react'
import './Styles/Navbar.css'

function Navbar() {

    return (
        <nav className="navbar">
            <div className="logo">
                    <h4>Instruments</h4>
                </div>
                <ul className="nav-menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                    <i class="fas fa-shopping-cart"></i>
                    </li>
                    <li>
                        <i class="fas fa-user-circle"></i>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar
