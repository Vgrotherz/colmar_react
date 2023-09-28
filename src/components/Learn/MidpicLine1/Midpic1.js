import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseSoftware from '../../capstone_colmar_assets/images/course-software.jpg';

const Midpic1 = () => {
    const [ isHovered1, setIsHovered1 ] = useState(false);
    const [ isClickedMob1, setIsClickedMob1 ] = useState(false);
    const [ isClickedTabl1, setIsClickedTabl1 ] = useState(false);
    
    const handleClickMObile = () => {
        const screenWidth = window.innerWidth;
        if(screenWidth <= 768) {
            setIsClickedMob1(!isClickedMob1);
        } else if (screenWidth => 425 && screenWidth <= 768) {
            setIsClickedTabl1(!isClickedTabl1);
        }
    } 

    const handleMouseEnter = () => {
            setIsHovered1(true);
    };

    const handleMouseLeave = () => {
            setIsHovered1(false);    
    };

    // styles if hoverin above 768px
    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered1 && window.innerWidth > 768? 'hovered_img' : null } `;
    const hidingMidPicHovered = `nav_link  
            ${ isHovered1 && window.innerWidth > 768? 'hiding_midpic_hover': 'hiding_midpic' } 
            ${ isClickedMob1? 'hiding_midpic_click' : 'desktop' }`;
    const hoveredText =`
        ${ isHovered1 && window.innerWidth > 768? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } 
        ${ isClickedMob1 && window.innerWidth < 425 ? 'mobile_h2' : '' }
         `;

    // tablet view 425px-768px
    const tabletClicks = `midpic-text ${ isClickedTabl1 && window.innerWidth < 768 && window.innerWidth > 425? 'tablet_click_on' : ''}`

    // mobile - below 425px
    const mobileImgClicks = `mob_img_hide ${ isClickedMob1? '' : 'desktop' }`;

    // handle links to a NavLink when clicks on an Img
    const navLinkRef = useRef(null);

    const handleClickLink = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }

    return (
        <>
            <div  
                className={hoveredImg}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClickMObile}
                >
                <img className="desktop point" src={courseSoftware} alt="soft course" 
                onClick={handleClickLink}
                />
                <div className={tabletClicks}>    
                    <h2 className={hoveredText} onClick={handleClickMObile} >Software engineering</h2>
                    <img className={mobileImgClicks} src={courseSoftware} alt="soft course" 
                    onClick={handleClickLink}
                    />
                    <NavLink to='/contacts' className={hidingMidPicHovered} ref={navLinkRef}>
                        <p className="midpic-text-p" >COURSES</p>
                        <p className="" >
                            Web Development, Mobile Development,
                            <br></br>
                            iOT, APIs
                        </p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic1;