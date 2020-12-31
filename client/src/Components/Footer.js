import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Styles/Footer.css";

function Footer() {
    return (
        <div className="footer-container" id = "footer">
            <div className="footer-links">
                <div className="footer-subscription-wrapper">
                    <div className="footer-subscription">
                        <p className="footer-subscription-heading">
                            Subscribe to receive our best offers
                        </p>
                        <p className="footer-subscription-text">
                            You can unsubscribe at any time
                        </p>
                        <div className="input-areas">
                            <form>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="footer-input"
                                />
                                <Button buttonStyle="btn-outline">
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/">Bla bla</Link>
                        <Link to="/">blablabla</Link>
                        <Link to="/">blablabla</Link>
                        <Link to="/">blablabla</Link>
                        <Link to="/">blablabla</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/">Bla bla</Link>
                        <Link to="/">blablabla</Link>
                        <Link to="/">blablabla</Link>
                        <Link to="/">blablabla</Link>
                        <Link to="/">blablabla</Link>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <h2>Our social media</h2>
                <div className="social-icons"> 
                    <Link
                        className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                    >
                        <i class="fab fa-facebook-f" />
                    </Link>
                    <Link
                        className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                    >
                        <i class="fab fa-youtube" />
                    </Link>
                    <Link
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                    >
                        <i class="fab fa-instagram" />
                    </Link>
                    <Link
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                    >
                        <i class="fab fa-twitter" />
                    </Link>
                </div>
            </div>
            <div className="website-rights">
                <small >
                    Copyright Instruments © 2021
                </small>
            </div>
        </div>
    );
}

export default Footer;
