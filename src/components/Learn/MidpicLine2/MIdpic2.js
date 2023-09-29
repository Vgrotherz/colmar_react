import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseComputer from '../../capstone_colmar_assets/images/course-computer-art.jpg';

const Midpic2 = () => {
    const [ isHovered2, setIsHovered2 ] = useState(false);
    const [ isClickedMob2, setIsClickedMob2 ] = useState(false);
    const [ isClickedTabl2, setIsClickedTabl2 ] = useState(false);

    const handleClickMObile = () => {
        const screenWidth = window.innerWidth;
        if(screenWidth <= 768) {
            setIsClickedMob2(!isClickedMob2);
        } else if (screenWidth => 425 && screenWidth <= 768) {
            setIsClickedTabl2(!isClickedTabl2);
        }
    } 

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };
    
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    // styles if hoverin above 768px
    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered2 && window.innerWidth > 768? 'hovered_img' : null } `;
    const hidingMidPicHovered2 = `nav_link  
        ${ isHovered2 && window.innerWidth > 768? 'hiding_midpic_hover': 'hiding_midpic' } 
        ${ isClickedMob2? 'hiding_midpic_click' : 'desktop' } `;
    const hoveredText =`
        ${ isHovered2 && window.innerWidth > 768? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } 
        ${ isClickedMob2 && window.innerWidth < 425? 'mobile_h2' : '' } `;

    // tablet view 425px-768px
    const tabletClicks = `midpic-text ${ isClickedTabl2 && window.innerWidth < 768 && window.innerWidth > 425? 'tablet_click_on' : ''}`;
    
    // mobile - below 425px
    const mobileImgClicks = `mob_img_hide ${isClickedMob2? '' : 'desktop' }`;

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
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                onClick={handleClickMObile}
                >
                <img className="desktop point" src={courseComputer} alt="comp art" 
                onClick={handleClickMObile} />
                <div className={tabletClicks}>    
                    <h2 className={hoveredText}>Computer art</h2>
                    <img className={mobileImgClicks} src={courseComputer} alt="soft course" 
                    onClick={handleClickLink} />
                    <NavLink to='/contacts' className={hidingMidPicHovered2} ref={navLinkRef}>
                        <p className="midpic-text-p" >COURSES</p>
                        <p>
                            Imaging & Design, Web Design,
                            <br></br>
                            Motion Graphics & Visual Effects,
                            <br></br>
                            Computer Animation
                        </p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic2;