import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import courseComputer from '../../capstone_colmar_assets/images/course-computer-art.jpg';

const Midpic2 = () => {
    const [ isHovered2, setIsHovered2 ] = useState(false);

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };
    
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const hoveredImg= `midpic midpic-slave box box2 nav_link ${ isHovered2? 'hovered_img' : null } `;
    const hidingMidPicHovered2 = isHovered2? 'hiding_midpic_hover': 'hiding_midpic' ;


    return (
        <>
            <NavLink to='/contacts' className={hoveredImg}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}>
                <img className="desktop" src={courseComputer} alt="comp art" />
                <div className="midpic-text">    
                    <h2>Computer art</h2>
                    <div className={hidingMidPicHovered2}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation</p>
                    </div>
                </div>
            </NavLink>
            <div className="bg"></div>
        </>
    );
}

export default Midpic2;