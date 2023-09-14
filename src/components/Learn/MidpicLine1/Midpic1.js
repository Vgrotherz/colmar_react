import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseSoftware from '../../capstone_colmar_assets/images/course-software.jpg';

const Midpic1 = () => {
    const [ isHovered1, setIsHovered1 ] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave = () => {
        setIsHovered1(false);
    };

    const hoveredImg= `midpic midpic-slave box box1 nav_link ${ isHovered1? 'hovered_img' : null } `;
    const hidingMidPicHovered = `nav_link ${ isHovered1? 'hiding_midpic_hover': 'hiding_midpic' }` ;

    const navLinkRef = useRef(null);

    const handleClick = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }

    return (
        <>
            <div  className={hoveredImg}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <img className="desktop point" src={courseSoftware} alt="soft course" 
                onClick={handleClick}
                />
                <div className="midpic-text">    
                    <h2>Software engineering</h2>
                    <NavLink to='/contacts' className={hidingMidPicHovered} ref={navLinkRef}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >Web Development, Mobile Development, iOT, APIs</p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic1;