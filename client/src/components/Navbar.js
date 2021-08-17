import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    const handleClick = () => setClick(!click);

    

    const changeNavbar = () => {
        if(window.scrollY >= 200){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return(
        <nav className={scrolled ? 'nav scrolled': 'nav'} >
            <Link to="/" className="nav-logo">
                Instruments
                <i class="fas fa-guitar"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>
            <ul className={click ? "nav-menu mobile" : "nav-menu" }>
                <li className="nav-item">
                    <Link to="#" className="nav-links">Products </Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-links">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="#"  className="nav-links"><i className="fas fa-shopping-cart"></i></Link>
                </li>
                <li className="nav-item"  >
                    <Link to="#" className="nav-links"><i className="fas fa-user" /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;