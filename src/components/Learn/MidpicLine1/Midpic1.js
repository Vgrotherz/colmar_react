import React, { useState } from "react";
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
    const hidingMidPicHovered = `${ isHovered1? 'hiding_midpic_hover': 'hiding_midpic' }` ;

    return (
        <>
            <NavLink to='/contacts' className={hoveredImg}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <img className="desktop" src={courseSoftware} alt="soft course" />
                <div className="midpic-text">    
                    <h2>Software engineering</h2>
                    <div className={hidingMidPicHovered}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >Web Development, Mobile Development, iOT, APIs</p>
                    </div>
                </div>
            </NavLink>
            <div className="bg"></div>
        </>
    );
}

export default Midpic1;