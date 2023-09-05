import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Header.css';
import './Reset.css';

import logoAcademy from '../capstone_colmar_assets/images/ic-logo.svg';
import logoAcademyMob from '../capstone_colmar_assets/images/ic-on-campus.svg';
import logoOnlineMob from '../capstone_colmar_assets/images/ic-online.svg';
import logoLogin from '../capstone_colmar_assets/images/ic-login.svg';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-name">
                <Link to='/' className="link logo_academy">
                    <img src={logoAcademy} alt="Logo of an Academy" />
                    <p className="desktop">COLMAR<span>ACADEMY</span></p>
                </Link>
                <Link>
                    <img  className="mobile" src={logoAcademyMob} alt="campus logo" />
                </Link>
                <Link>
                    <img  className="mobile" src={logoOnlineMob} alt="online" />
                </Link>
                <Link to='/404'>
                    <img className="mobile" src={logoLogin} alt="login" />   
                </Link>      
            </div>
            <div className="navigation desktop">
                <ul className="list">
                    <li>
                        <NavLink to='/info' 
                        className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink' } >
                            On campus
                        </NavLink></li>
                    <li><span>
                        <NavLink to='/learn' 
                        className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink' } >
                            Online
                        </NavLink></span></li>
                    <li><span>
                        <NavLink to='/contacts' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >
                            Contacts
                        </NavLink></span></li>
                    <li><span>
                        <NavLink to='/404' className='inactiveNavLink' >
                        Sign in
                        </NavLink></span></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;