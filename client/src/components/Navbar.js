import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { cartItems } = useSelector(state => state.cart);

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
                    <Link to="/cart"  className="nav-links"><i className="fas fa-shopping-cart" /> 
                        {cartItems.length > 0 && (<span>{cartItems.length}</span>)}
                    </Link>
                </li>
                <li className="nav-item"  >
                    <Link to="/auth" className="nav-links"><i className="fas fa-user" /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;