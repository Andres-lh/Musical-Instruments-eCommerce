import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Link as LinkScroll  } from 'react-scroll';
import "./Navbar.css";
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] =  useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const closeMenu = () => setDropdown(false);

    const onMouseEnter = () =>{window.innerWidth < 960 ? setDropdown(false) : setDropdown(true)};
    const onMouseLeave = () =>{window.innerWidth < 960 ? setDropdown(false) : setDropdown(false)};

    const scrollToTop = () => window.scrollTo({top: 0, behavior : "smooth"});

    return (
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo" onClick={scrollToTop}>
                        Instruments
                        <i class="fas fa-guitar"></i>  
                </Link>
                <div className="menu-icon" onClick = {handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu" }>
                    <li className="nav-item" >
                        <Link to="/" className="nav-links" onClick={closeMobileMenu} onClick = {scrollToTop}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  onClick={closeMenu}>
                        {dropdown && <Dropdown/>}
                        <LinkScroll
                            activeClass = "active"
                            to ="categorySection" 
                            spy = {true}
                            smooth = {true}
                            offset = {-70}
                            duration = {500}
                            className="nav-links" 
                            onClick={closeMobileMenu} 
                            onClick={closeMenu}
                        >
                            Products
                            <i className="fas fa-caret-down"></i>
                        </LinkScroll>
                    </li>
                    <li className="nav-item" >
                        <LinkScroll 
                            activeClass = "active"
                            to ="footer" 
                            spy = {true}
                            smooth = {true}
                            offset = {0}
                            duration = {500}
                            className="nav-links" 
                            onClick={closeMobileMenu}
                        >
                            About
                        </LinkScroll>
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
