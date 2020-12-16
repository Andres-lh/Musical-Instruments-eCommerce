import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setClick] =  useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () =>{window.innerWidth < 960 ? setDropdown(false) : setDropdown(true)}
    const onMouseLeave = () =>{window.innerWidth < 960 ? setDropdown(false) : setDropdown(false)}

    return (
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    Instruments
                    <i class="fas fa-guitar"></i>
                </Link>
                <div className="menu-icon" onClick = {handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu" }>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        {dropdown && <Dropdown/>}
                        <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                            <i className="fas fa-caret-down"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                            <i class="fas fa-shopping-cart"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/account" className="nav-links" onClick={closeMobileMenu}>
                            <i class="fas fa-user"></i>
                        </Link>
                        
                    </li>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;
