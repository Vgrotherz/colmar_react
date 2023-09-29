import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Header.css';
import './Reset.css';

// imgs
import logoAcademyMob from '../capstone_colmar_assets/images/ic-logo.svg';
import logoCampusMob from '../capstone_colmar_assets/images/ic-on-campus.svg';
import logoOnlineMob from '../capstone_colmar_assets/images/ic-online.svg';
import logoLogin from '../capstone_colmar_assets/images/ic-login.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-name_margin">
                <div className="logo-name">
                    <NavLink to='/info' activeClassName="link logo_academy">
                        {({ isActive }) => (
                            <img className={ isActive? 'mobile_click_on_45' : 'mobile_click_off_35' } 
                            src={logoAcademyMob} alt="Logo of an Academy" />
                        )}
                    </NavLink>
                    <Link className="link">
                        <p className="desktop">COLMAR<span>ACADEMY</span></p>
                    </Link>
                </div>
                <NavLink to='/learn'>
                    {({ isActive }) => (
                        <img className={ isActive? 'mobile mobile_click_on' : 'mobile mobile_click_off' }
                        src={logoCampusMob} alt="campus logo" />
                    )}
                </NavLink>
                <NavLink to='/contacts'>
                    {({ isActive }) => (
                        <img className={ isActive? 'mobile mobile_click_on' : 'mobile mobile_click_off' } src={logoOnlineMob} alt="online" />
                    )}
                </NavLink>
                <NavLink to='/404'>
                    {({ isActive }) => (
                        <img className={ isActive? 'mobile mobile_click_on' : 'mobile mobile_click_off' } src={logoLogin} alt="login" />   
                    )}
                </NavLink>      
            </div>
            <div className="navigation desktop">
                <ul className="list">
                    <li>
                        <NavLink to='/info' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink' } >
                            On campus
                        </NavLink>
                    </li>
                    <li>
                        <span>
                            <NavLink to='/learn'className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink' } >
                                Online
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <NavLink to='/contacts' className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >
                                Contacts
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <NavLink to='/404' className='inactiveNavLink' >
                            Sign in
                            </NavLink>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;