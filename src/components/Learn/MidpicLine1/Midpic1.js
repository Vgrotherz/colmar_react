import React, { useState } from "react";

import courseSoftware from '../../capstone_colmar_assets/images/course-software.jpg';

const Midpic1 = () => {
    const [ isHovered1, setIsHovered1 ] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave = () => {
        setIsHovered1(false);
    };

    const hidingMidPicHovered = `${ !isHovered1? 'hiding_midpic_hover': 'hiding_midpic' }` ;

    return (
        <>
            <div className="midpic midpic-slave box box1"
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
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic1;