import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseComputer from '../../capstone_colmar_assets/images/course-computer-art.jpg';

const Midpic2 = () => {
    const [ isHovered2, setIsHovered2 ] = useState(false);
    const [ isClickedMob2, setIsClickedMob2 ] = useState(false);

    const handleClickMObile = () => {
        if(window.innerWidth <= 425) {
            setIsClickedMob2(!isClickedMob2);
        }
    } 

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };
    
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const hoveredImg = `midpic midpic-slave box box1 nav_link ${ isHovered2 && window.innerWidth > 425? 'hovered_img' : null } `;
    const mobileImgClicks = `mob_img_hide ${isClickedMob2? '' : 'desktop' }`;
    const hidingMidPicHovered2 = `nav_link  ${ isHovered2 && window.innerWidth > 425? 'hiding_midpic_hover': 'hiding_midpic' } ${isClickedMob2? 'hiding_midpic_click' : 'desktop' }` ;
    const hoveredText =`${ isHovered2 && window.innerWidth > 425? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } ${isClickedMob2? 'mobile_h2' : '' }`;

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
                onClick={handleClickMObile} 
                />
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Computer art</h2>
                    <img className={mobileImgClicks} src={courseComputer} alt="soft course" 
                    onClick={handleClickLink}
                    />
                    <NavLink to='/contacts' className={hidingMidPicHovered2}
                    ref={navLinkRef}>
                        <p className="midpic-text-p" >COURSES</p>
                        <p className="" >
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