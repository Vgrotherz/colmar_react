import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseBusiness from "../../capstone_colmar_assets/images/course-business.jpg";

const Midpic5 = () => {
    const [ isHovered5, setIsHovered5 ] = useState(false);

    const handleMouseEnter5 = () => {
        setIsHovered5(true);
    };
    
    const handleMouseLeave5 = () => {
        setIsHovered5(false);
    };

    const hoveredImg= `midpic midpic-slave box box2 nav_link ${ isHovered5? 'hovered_img' : null } `;
    const hidingMidPicHovered5 = `nav_link ${isHovered5? 'hiding_midpic_hover': 'hiding_midpic'}` ;

    const navLinkRef = useRef(null)

    const handleClick = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }

    return (
        <>
            <div className={hoveredImg}
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}>
                <img className="desktop point" src={courseBusiness} alt="business course" 
                onClick={handleClick} />
                <div className="midpic-text">    
                    <h2>Business</h2>
                    <NavLink to='/contacts' className={hidingMidPicHovered5} ref={navLinkRef}> 
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >Product Development, Business Development, Startup</p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic5;