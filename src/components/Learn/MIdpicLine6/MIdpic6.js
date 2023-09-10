import React, { useState } from "react";
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
    const hidingMidPicHovered6 = isHovered6? 'hiding_midpic_hover': 'hiding_midpic' ;
    return (
        <>
            <NavLink to='/contacts' className={hoveredImg}
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}>
                <img className="desktop" src={courseMarketing} alt="marketing course" />
                <div className="midpic-text">    
                    <h2>Marketing</h2>
                    <div className={hidingMidPicHovered6} >
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop">Analytics, Content Marketing, Mobile marketing</p>
                    </div>
                </div>
            </NavLink>
            <div className="bg"></div>
        </>
    );
}

export default Midpic6;