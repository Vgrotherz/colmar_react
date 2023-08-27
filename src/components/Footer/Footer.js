import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div class="foot">
                <p>© Colmar Academy. All rights reserved</p>
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