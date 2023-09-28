import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import './Header.css';
import './Reset.css';

// imgs
import logoAcademyMob from '../capstone_colmar_assets/images/ic-logo.svg';
import logoCampusMob from '../capstone_colmar_assets/images/ic-on-campus.svg';
import logoOnlineMob from '../capstone_colmar_assets/images/ic-online.svg';
import logoLogin from '../capstone_colmar_assets/images/ic-login.svg';

const Header = () => {
    const [mobIcon, setMobIcon] = useState(null);
    
    const handleClickOn = (divId) => {
        setMobIcon(divId);
    }

    // handle mobile styles, when icons visual been clicked
    const handleMobIconClicked1 = `${(mobIcon === 'img1') ? 'mobile_click_on_45' : 'mobile_click_off_35' }`;
    const handleMobIconClicked2 = (icon) => {
        return `mobile ${(mobIcon === icon) ? 'mobile_click_on' : 'mobile_click_off'}`;
    }

    return (
        <div className="header">
            <div className="logo-name_margin">
                <div className="logo-name">
                    <Link to='/info' className="link logo_academy">
                        <img 
                        onClick={ () => handleClickOn('img1')} 
                        className={ handleMobIconClicked1 } 
                        src={logoAcademyMob} alt="Logo of an Academy" />
                    </Link>
                    <Link className="link">
                        <p className="desktop">COLMAR<span>ACADEMY</span></p>
                    </Link>
                </div>
                <Link to='/learn' onClick={ () => handleClickOn('img2') }>
                    <img  
                     
                    className={ handleMobIconClicked2('img2') }
                    src={logoCampusMob} alt="campus logo" />
                </Link>
                <Link to='/contacts' onClick={ () => handleClickOn('img3') }>
                    <img  
                     
                    className={ handleMobIconClicked2('img3') } 
                    src={logoOnlineMob} alt="online" />
                </Link>
                <Link to='/404' onClick={ () => handleClickOn('img4') } >
                    <img 
                    
                    className={ handleMobIconClicked2('img4') } 
                    src={logoLogin} alt="login" />   
                </Link>      
            </div>
            <div className="navigation desktop">
                <ul className="list">
                    <li>
                        <NavLink to='/info'
                        onClick={ () => handleClickOn('img1') }
                        className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink' } >
                            On campus
                        </NavLink></li>
                    <li><span>
                        <NavLink to='/learn'
                        onClick={ () => handleClickOn('img2') } 
                        className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink' } >
                            Online
                        </NavLink></span></li>
                    <li><span>
                        <NavLink to='/contacts' 
                        onClick={ () => handleClickOn('img3') }
                        className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >
                            Contacts
                        </NavLink></span></li>
                    <li><span>
                        <NavLink to='/404' 
                        onClick={ () => handleClickOn('img4') }
                        className='inactiveNavLink' >
                        Sign in
                        </NavLink></span></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;