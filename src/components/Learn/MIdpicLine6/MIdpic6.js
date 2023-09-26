import React, { useState,useRef } from "react";
import { NavLink } from "react-router-dom";

import courseMarketing from "../../capstone_colmar_assets/images/course-marketing.jpg";

const Midpic6 = () => {
    const [ isHovered6, setIsHovered6 ] = useState(false);
    const [ isClickedMob6, setIsClickedMob6 ] = useState(false);

    const handleClickMObile = () => {
        if(window.innerWidth <= 425) {
            setIsClickedMob6(!isClickedMob6);
        }
    } 

    const handleMouseEnter6 = () => {
        setIsHovered6(true);
    };
    
    const handleMouseLeave6 = () => {
        setIsHovered6(false);
    };

    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered6 && window.innerWidth > 425? 'hovered_img' : null } `;
    const mobileImgClicks = `mob_img_hide ${isClickedMob6? '' : 'desktop' }`;
    const hidingMidPicHovered6 = `nav_link  ${ isHovered6 && window.innerWidth > 425? 'hiding_midpic_hover': 'hiding_midpic' } ${isClickedMob6? 'hiding_midpic_click' : 'desktop' }` ;
    const hoveredText =`${ isHovered6 && window.innerWidth > 425? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } ${isClickedMob6? 'mobile_h2' : '' }`;

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
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
                onClick={handleClickMObile}
                >
                <img className="desktop point" src={courseMarketing} alt="marketing course" 
                onClick={handleClickLink}
                />
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Marketing</h2>
                    <img className={mobileImgClicks} src={courseMarketing} alt="soft course" 
                    onClick={handleClickLink}
                    />
                    <NavLink to='/contacts' className={hidingMidPicHovered6} ref={navLinkRef} >
                        <p className="midpic-text-p" >COURSES</p>
                        <p className="">Analytics, Content Marketing, Mobile marketing</p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic6;