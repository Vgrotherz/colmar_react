import React, { useState } from "react";
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
    const hidingMidPicHovered3 = isHovered3? 'hiding_midpic_hover': 'hiding_midpic' ; 

    return (
        <>
            <NavLink to='/contacts' className={hoveredImg}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}>
                <img className="desktop" src={courseDesign} alt="design course" />
                <div className="midpic-text">    
                    <h2>Design</h2>
                    <div className={hidingMidPicHovered3}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >User Experience Design, User Research, Visual Design</p>
                    </div>
                </div>
            </NavLink>
            <div className="bg"></div>
        </>
    );
}

export default Midpic3;