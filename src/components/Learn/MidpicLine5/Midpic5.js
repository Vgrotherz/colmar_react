import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseBusiness from "../../capstone_colmar_assets/images/course-business.jpg";

const Midpic5 = () => {
    const [ isHovered5, setIsHovered5 ] = useState(false);
    const [ isClickedMob5, setIsClickedMob5 ] = useState(false);

    const handleClickMObile = () => {
        if(window.innerWidth <= 425) {
            setIsClickedMob5(!isClickedMob5);
        }
    } 

    const handleMouseEnter5 = () => {
        setIsHovered5(true);
    };
    
    const handleMouseLeave5 = () => {
        setIsHovered5(false);
    };

    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered5 && window.innerWidth > 425? 'hovered_img' : null } `;
    const mobileImgClicks = `mob_img_hide ${isClickedMob5? '' : 'desktop' }`;
    const hidingMidPicHovered5 = `nav_link  ${ isHovered5 && window.innerWidth > 425? 'hiding_midpic_hover': 'hiding_midpic' } ${isClickedMob5? 'hiding_midpic_click' : 'desktop' }` ;
    const hoveredText =`${ isHovered5 && window.innerWidth > 425? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } ${isClickedMob5? 'mobile_h2' : '' }`;


    const navLinkRef = useRef(null)

    const handleClickLink = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }

    return (
        <>
            <div 
                className={hoveredImg}
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
                onClick={handleClickMObile}
                >
                <img className="desktop point" src={courseBusiness} alt="business course" 
                onClick={handleClickLink} 
                />
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Business</h2>
                    <img className={mobileImgClicks} src={courseBusiness} alt="soft course" 
                    onClick={handleClickLink}
                    />
                    <NavLink to='/contacts' className={hidingMidPicHovered5} ref={navLinkRef}> 
                        <p className="midpic-text-p" >COURSES</p>
                        <p className="" >
                            Product Development, Business Development,
                            <br></br> 
                            Startup
                        </p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic5;