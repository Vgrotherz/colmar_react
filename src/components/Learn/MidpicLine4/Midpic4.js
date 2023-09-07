import React, { useState } from "react";

import courseData from '../../capstone_colmar_assets/images/course-data.jpg';

const Midpic4 = () => {
    const [ isHovered4, setIsHovered4 ] = useState(false);

    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };
    
    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };

    const hidingMidPicHovered4 = !isHovered4? 'hiding_midpic_hover': 'hiding_midpic' ;
    
    return (
        <>
            <div className="midpic midpic-slave box box1"
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}>
                <img className="desktop" src={courseData} alt="data course" />
                <div className="midpic-text">    
                    <h2>Data</h2>
                    <div className={hidingMidPicHovered4}>
                        <p className="midpic-text-p desktop" >COURSES</p>
                        <p className="desktop" >Data Science, Big Date, SQL, Data Visualiation</p>
                    </div>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
}

export default Midpic4;