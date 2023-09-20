import React, { useState,useRef } from "react";
import { NavLink } from "react-router-dom";

import courseMarketing from "../../capstone_colmar_assets/images/course-marketing.jpg";

const Midpic6 = () => {
    const [ isHovered6, setIsHovered6 ] = useState(false);

    const handleMouseEnter6 = () => {
        setIsHovered6(true);
    };
    
    const handleMouseLeave6 = () => {
        setIsHovered6(false);
    };

    const hoveredImg= `midpic midpic-slave box box3 nav_link ${ isHovered6? 'hovered_img' : null } `;
    const hidingMidPicHovered6 = `nav_link ${isHovered6? 'hiding_midpic_hover': 'hiding_midpic'}` ;
    const hoveredText =`${ isHovered6? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } `;

    const navLinkRef = useRef(null)

    const handleClick = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }

    return (
        <>
            <div className={hoveredImg}
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}>
                <img className="desktop point" src={courseMarketing} alt="marketing course" 
                onClick={handleClick}/>
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Marketing</h2>
                    <NavLink to='/contacts' className={hidingMidPicHovered6} ref={navLinkRef} >
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop">Analytics, Content Marketing, Mobile marketing</p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic6;