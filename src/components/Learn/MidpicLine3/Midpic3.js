import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseDesign from '../../capstone_colmar_assets/images/course-design.jpg';

const Midpic3 = () => {
    const [ isHovered3, setIsHovered3 ] = useState(false);
    const [ isClickedMob3, setIsClickedMob3 ] = useState(false);
    const [ isClickedTabl3, setIsClickedTabl3 ] = useState(false);

    const handleClickMObile = () => {
        const screenWidth = window.innerWidth;
        if(screenWidth <= 768) {
            setIsClickedMob3(!isClickedMob3);
        } else if (screenWidth => 425 && screenWidth <= 768) {
            setIsClickedTabl3(!isClickedTabl3);
        }
    } 

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };

    // styles if hoverin above 768px
    const hoveredImg= `midpic midpic-slave box box1 nav_link ${ isHovered3 && window.innerWidth > 768? 'hovered_img' : null } `;
    const hidingMidPicHovered3 = `nav_link  
        ${ isHovered3 && window.innerWidth > 768? 'hiding_midpic_hover': 'hiding_midpic' } 
        ${ isClickedMob3? 'hiding_midpic_click' : 'desktop' } `;
    const hoveredText =`
        ${ isHovered3 && window.innerWidth > 768? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } 
        ${ isClickedMob3 && window.innerWidth < 425? 'mobile_h2' : '' } `;

    // tablet view 425px-768px
    const tabletClicks = `midpic-text ${ isClickedTabl3 && window.innerWidth < 768 && window.innerWidth > 425? 'tablet_click_on' : ''}` 

    // mobile - below 425px
    const mobileImgClicks = `mob_img_hide ${isClickedMob3? '' : 'desktop' }`;

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
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                onClick={handleClickMObile}
                >
                <img className="desktop point" src={courseDesign} alt="design course" 
                onClick={handleClickLink} />
                <div className={tabletClicks}>    
                    <h2 className={hoveredText}>Design</h2>
                    <img className={mobileImgClicks} src={courseDesign} alt="soft course" 
                    onClick={handleClickLink} />
                    <NavLink to='/contacts' className={hidingMidPicHovered3} ref={navLinkRef}>
                        <p className="midpic-text-p" >COURSES</p>
                        <p>
                            User Experience Design, User Research,
                            <br></br>
                            Visual Design
                        </p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic3;