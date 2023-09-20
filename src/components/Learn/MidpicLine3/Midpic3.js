import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseDesign from '../../capstone_colmar_assets/images/course-design.jpg';

const Midpic3 = () => {
    const [ isHovered3, setIsHovered3 ] = useState(false);

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };

    const hoveredImg= `midpic midpic-slave box box3 nav_link ${ isHovered3? 'hovered_img' : null } `;
    const hidingMidPicHovered3 = `nav_link ${isHovered3? 'hiding_midpic_hover': 'hiding_midpic'}` ;
    const hoveredText =`${ isHovered3? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } `; 

    const navLinkRef = useRef(null)

    const handleClick = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }

    return (
        <>
            <div className={hoveredImg}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}>
                <img className="desktop point" src={courseDesign} alt="design course" 
                onClick={handleClick}/>
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Design</h2>
                    <NavLink to='/contacts' className={hidingMidPicHovered3} ref={navLinkRef}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >
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