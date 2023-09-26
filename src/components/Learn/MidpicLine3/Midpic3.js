import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseDesign from '../../capstone_colmar_assets/images/course-design.jpg';

const Midpic3 = () => {
    const [ isHovered3, setIsHovered3 ] = useState(false);
    const [ isClickedMob3, setIsClickedMob3 ] = useState(false);

    const handleClickMObile = () => {
        if(window.innerWidth <= 425) {
            setIsClickedMob3(!isClickedMob3);
        }
    } 

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };

    const hoveredImg= `midpic midpic-slave box box1 nav_link ${ isHovered3 && window.innerWidth > 425? 'hovered_img' : null } `;
    const mobileImgClicks = `mob_img_hide ${isClickedMob3? '' : 'desktop' }`;
    const hidingMidPicHovered3 = `nav_link  ${ isHovered3 && window.innerWidth > 425? 'hiding_midpic_hover': 'hiding_midpic' } ${isClickedMob3? 'hiding_midpic_click' : 'desktop' }` ;
    const hoveredText =`${ isHovered3 && window.innerWidth > 425? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } ${isClickedMob3? 'mobile_h2' : '' }`; 

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
                onClick={handleClickLink}
                />
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Design</h2>
                    <img className={mobileImgClicks} src={courseDesign} alt="soft course" 
                    onClick={handleClickLink}
                    />
                    <NavLink to='/contacts' className={hidingMidPicHovered3} ref={navLinkRef}>
                        <p className="midpic-text-p" >COURSES</p>
                        <p className="" >
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