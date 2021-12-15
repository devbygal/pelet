import React from "react";
import { Link } from "react-scroll";
import './styles/Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="copyright-text">
                    <p>© 2021 פ.ל.ת</p>
                </div>
                <div className="copyright-logo">
                    <Link to="#" className="link-logo"></Link>
                </div>
            </div>
        </footer>
    );
}