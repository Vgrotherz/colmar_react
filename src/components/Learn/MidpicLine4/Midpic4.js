import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseData from '../../capstone_colmar_assets/images/course-data.jpg';

const Midpic4 = () => {
    const [ isHovered4, setIsHovered4 ] = useState(false);
    const [ isClickedMob4, setIsClickedMob4 ] = useState(false);
    const [ isClickedTabl4, setIsClickedTabl4 ] = useState(false);

    const handleClickMObile = () => {
        const screenWidth = window.innerWidth;
        if(screenWidth <= 768) {
            setIsClickedMob4(!isClickedMob4);
        } else if (screenWidth => 425 && screenWidth <= 768) {
            setIsClickedTabl4(!isClickedTabl4);
        }
    }  


    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };
    
    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };

    // styles if hoverin above 768px
    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered4 && window.innerWidth > 768? 'hovered_img' : null } `;
    const hidingMidPicHovered4 = `nav_link  
        ${ isHovered4 && window.innerWidth > 768? 'hiding_midpic_hover': 'hiding_midpic' } 
        ${ isClickedMob4? 'hiding_midpic_click' : 'desktop' }`;
    const hoveredText =`
        ${ isHovered4 && window.innerWidth > 768? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } 
        ${ isClickedMob4 && window.innerWidth < 425 ? 'mobile_h2' : '' }`;

    // tablet view 425px-768px
    const tabletClicks = `midpic-text ${ isClickedTabl4 && window.innerWidth < 768 && window.innerWidth > 425? 'tablet_click_on' : ''}`

    // mobile - below 425px
    const mobileImgClicks = `mob_img_hide ${isClickedMob4? '' : 'desktop' }`;

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
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
                onClick={handleClickMObile}
                >
                <img className="desktop point" src={courseData} alt="data course"
                onClick={handleClickLink} 
                />
                <div className={tabletClicks}>    
                    <h2 className={hoveredText}>Data</h2>
                    <img className={mobileImgClicks} src={courseData} alt="soft course" 
                    onClick={handleClickLink}
                    />
                    <NavLink to='/contacts' className={hidingMidPicHovered4}
                    ref={navLinkRef}>
                        <p className="midpic-text-p" >COURSES</p>
                        <p className="" >Data Science, Big Date, SQL, Data Visualiation</p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic4;