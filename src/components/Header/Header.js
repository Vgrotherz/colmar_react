import React from "react";
import './Header.css';
import logoAcademy from '../capstone_colmar_assets/images/ic-logo.svg';
import logoAcademyMob from '../capstone_colmar_assets/images/ic-on-campus.svg';
import logoOnlineMob from '../capstone_colmar_assets/images/ic-online.svg';
import logoLogin from '../capstone_colmar_assets/images/ic-login.svg';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-name">
                <img src={logoAcademy} alt="Logo of an Academy" />
                <p className="desktop">COLMAR<span>ACADEMY</span></p>
                <img  className="mobile" src={logoAcademyMob} alt="campus logo" />
                <img  className="mobile" src={logoOnlineMob} alt="online" />
                <img className="mobile" src={logoLogin} alt="login" />         
            </div>
            <div className="navigation desktop">
                <ul className="list">
                    <li>On campus</li>
                    <li><span>Online</span></li>
                    <li><span>For companies</span></li>
                    <li><span>Sign in</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;