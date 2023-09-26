import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div class="foot">
                <Link className="nav_link">
                    <p>© Colmar Academy. All rights reserved</p>
                </Link>
                <nav class="desktop">
                    <ul className="list">
                        <li>Terms</li>
                        <li><span>Privacy</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer;