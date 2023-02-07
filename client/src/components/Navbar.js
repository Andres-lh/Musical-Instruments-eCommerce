import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ solidNav }) => {
 
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollNum, setScrollNum] = useState(200);
    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
        if(solidNav) {
            setScrollNum(0);
            setScrolled(true);
        }else {
            setScrollNum(200);
            setScrolled(false);
        } 
    }, [solidNav])

    const handleClick = () => setClick(!click);

    const changeNavbar = () => {
            if(window.scrollY >= scrollNum){
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
                    <a href="/#products" className="nav-links">Products </a>
                </li>
                <li className="nav-item">
                    <a href="/#about" className="nav-links">About</a>
                </li>
                <li className="nav-item">
                    <Link to="/cart"  className="nav-links"><i className="fas fa-shopping-cart" /> 
                        {cartItems.length > 0 && (<span>{cartItems.length}</span>)}
                    </Link>
                </li>
                <li className="nav-item"  >
                    <Link to="/account" className="nav-links"><i className="fas fa-user" /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;