import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import courseData from '../../capstone_colmar_assets/images/course-data.jpg';

const Midpic4 = () => {
    const [ isHovered4, setIsHovered4 ] = useState(false);

    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };
    
    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };

    const hoveredImg= `midpic midpic-slave box box1 nav_link ${ isHovered4? 'hovered_img' : null } `;
    const hidingMidPicHovered4 = `nav_link ${isHovered4? 'hiding_midpic_hover': 'hiding_midpic'}` ;
    const hoveredText =`${ isHovered4? 'midpic-text_h2_hovered' : 'midpic-text_h2_nonHovered' } `;

    const navLinkRef = useRef(null)

    const handleClick = () => {
        if (navLinkRef.current) {
          navLinkRef.current.click();
        }
      }
    
    return (
        <>
            <div className={hoveredImg}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}>
                <img className="desktop point" src={courseData} alt="data course"
                onClick={handleClick} />
                <div className="midpic-text">    
                    <h2 className={hoveredText}>Data</h2>
                    <NavLink to='/contacts' className={hidingMidPicHovered4}
                    ref={navLinkRef}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >Data Science, Big Date, SQL, Data Visualiation</p>
                    </NavLink>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic4;