import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseData from '../../capstone_colmar_assets/images/course-data.jpg';

const Midpic4 = () => {
    const [ isHovered4, setIsHovered4 ] = useState(false);
    const [ isClickedMob4, setIsClickedMob4 ] = useState(false);

    const handleClickMObile = () => {
        if(window.innerWidth <= 425) {
            setIsClickedMob4(!isClickedMob4);
        }
    } 


    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };
    
    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };

    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered4 && window.innerWidth > 425? 'hovered_img' : null } `;
    const mobileImgClicks = `mob_img_hide ${isClickedMob4? '' : 'desktop' }`;
    const hidingMidPicHovered4 = `nav_link  ${ isHovered4 && window.innerWidth > 425? 'hiding_midpic_hover': 'hiding_midpic' } ${isClickedMob4? 'hiding_midpic_click' : 'desktop' }` ;
    const hoveredText =`${ isHovered4 && window.innerWidth > 425? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } ${isClickedMob4? 'mobile_h2' : '' }`;

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
                <div className="midpic-text">    
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