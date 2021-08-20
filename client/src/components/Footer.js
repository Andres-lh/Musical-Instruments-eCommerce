import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_links">
                <div className="footer_links-subscription">
                    <h2>Subscribe to receive our best offers</h2>
                    <form className="footer_links-subscription-input">
                        <input type="email" name="email" placeholder="Enter your email"/>
                        <button className="input-button">Suscribe</button>
                    </form>
                </div>
                <div className="footer_links-items">
                    <h2>About us</h2>
                    <Link to="/">Who are we?</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Payment Methods</Link>
                    <Link to="/">Careers</Link>
                </div>
                <div className="footer_links-items">
                    <h2>Support</h2>
                    <Link to="/">Customer service</Link>
                    <Link to="/">Site Map</Link>
                    <Link to="/">Contact us</Link>
                    <Link to="/">Virtual assistant</Link>
                </div>
            </div>
            <div className="footer_socialmedia">
                <h2>Our social media</h2>
                <div className="footer_socialmedia-icons"> 
                    <Link className="social-icon-link facebook" to="/" target="_blank">
                        <i class="fab fa-facebook-f" />
                    </Link>
                    <Link className="social-icon-link youtube" to="/" target="_blank">
                        <i class="fab fa-youtube" />
                    </Link>
                    <Link className="social-icon-link instagram" to="/" target="_blank">
                        <i class="fab fa-instagram" />
                    </Link>
                    <Link className="social-icon-link twitter" to="/" target="_blank">
                        <i class="fab fa-twitter" />
                    </Link>
                </div>
                <div className="website-rights">
                <small >
                    Copyright Instruments © 2021
                </small>
                </div>
            </div>
        </div>
    )
}

export default Footer; 