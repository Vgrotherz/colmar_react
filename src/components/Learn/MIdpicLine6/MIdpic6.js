import React, { useState } from "react";

import courseMarketing from "../../capstone_colmar_assets/images/course-marketing.jpg";

const Midpic6 = () => {
    const [ isHovered6, setIsHovered6 ] = useState(false);

    const handleMouseEnter6 = () => {
        setIsHovered6(true);
    };
    
    const handleMouseLeave6 = () => {
        setIsHovered6(false);
    };

    const hidingMidPicHovered6 = !isHovered6? 'hiding_midpic_hover': 'hiding_midpic' ;
    return (
        <>
            <div className="midpic midpic-slave box box3"
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
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic6;