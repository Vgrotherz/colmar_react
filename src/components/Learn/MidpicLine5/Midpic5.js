import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseBusiness from "../../capstone_colmar_assets/images/course-business.jpg";

const Midpic5 = () => {
    const [ isHovered5, setIsHovered5 ] = useState(false);
    const [ isClickedMob5, setIsClickedMob5 ] = useState(false);
    const [ isClickedTabl5, setIsClickedTabl5 ] = useState(false);

    const handleClickMObile = () => {
        const screenWidth = window.innerWidth;
        if(screenWidth <= 768) {
            setIsClickedMob5(!isClickedMob5);
        } else if (screenWidth => 425 && screenWidth <= 768) {
            setIsClickedTabl5(!isClickedTabl5);
        }
    } 

    const handleMouseEnter5 = () => {
        setIsHovered5(true);
    };
    
    const handleMouseLeave5 = () => {
        setIsHovered5(false);
    };

    // styles if hoverin above 768px
    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered5 && window.innerWidth > 768? 'hovered_img' : null } `;
    const hidingMidPicHovered5 = `nav_link  
        ${ isHovered5 && window.innerWidth > 768? 'hiding_midpic_hover': 'hiding_midpic' } 
        ${ isClickedMob5? 'hiding_midpic_click' : 'desktop' }` ;
    const hoveredText =`
        ${ isHovered5 && window.innerWidth > 768? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } 
        ${ isClickedMob5 && window.innerWidth < 425? 'mobile_h2' : '' }`;

    // tablet view 425px-768px
    const tabletClicks = `midpic-text ${ isClickedTabl5 && window.innerWidth < 768 && window.innerWidth > 425? 'tablet_click_on' : ''}`

    // mobile - below 425px
    const mobileImgClicks = `mob_img_hide ${isClickedMob5? '' : 'desktop' }`;

    // handle links to a NavLink when clicks on an Img
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
                onClick={handleClickLink} />
                <div className={tabletClicks}>    
                    <h2 className={hoveredText}>Business</h2>
                    <img className={mobileImgClicks} src={courseBusiness} alt="soft course" 
                    onClick={handleClickLink} />
                    <NavLink to='/contacts' className={hidingMidPicHovered5} ref={navLinkRef}> 
                        <p className="midpic-text-p" >COURSES</p>
                        <p>
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