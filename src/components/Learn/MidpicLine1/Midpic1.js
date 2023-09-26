import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseSoftware from '../../capstone_colmar_assets/images/course-software.jpg';

const Midpic1 = () => {
    const [ isHovered1, setIsHovered1 ] = useState(false);
    const [ isClickedMob1, setIsClickedMob1 ] = useState(false);

    const handleClickMObile = () => {
        if(window.innerWidth <= 425) {
            setIsClickedMob1(!isClickedMob1);
        }
    } 

    const handleMouseEnter = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave = () => {
        setIsHovered1(false);
    };

    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered1 && window.innerWidth > 425? 'hovered_img' : null } `;
    const mobileImgClicks = `mob_img_hide ${isClickedMob1? '' : 'desktop' }`;
    const hidingMidPicHovered = `nav_link  ${ isHovered1 && window.innerWidth > 425? 'hiding_midpic_hover': 'hiding_midpic' } ${isClickedMob1? 'hiding_midpic_click' : 'desktop' }` ;
    const hoveredText =`${ isHovered1 && window.innerWidth > 425? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } ${isClickedMob1? 'mobile_h2' : '' }`;

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
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Software engineering</h2>
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