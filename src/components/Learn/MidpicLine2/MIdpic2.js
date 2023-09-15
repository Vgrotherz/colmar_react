import React, { useState, useRef } from "react";
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
    const hidingMidPicHovered2 = `nav_link ${isHovered2? 'hiding_midpic_hover': 'hiding_midpic'}` ;

    const navLinkRef = useRef(null)

    const handleClick = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }

    return (
        <>
            <div className={hoveredImg}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}>
                <img className="desktop point" src={courseComputer} alt="comp art" 
                onClick={handleClick} />
                <div className="midpic-text">    
                    <h2>Computer art</h2>
                    <NavLink to='/contacts' className={hidingMidPicHovered2}
                    ref={navLinkRef}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >
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