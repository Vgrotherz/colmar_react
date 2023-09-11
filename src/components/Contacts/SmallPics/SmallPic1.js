import React, { useState } from "react";

import thesisFisma from "../../capstone_colmar_assets/images/thesis-fisma.jpg";

const SmallPic1 = () => {
    const [ smallImgHovered1, setImgHovered1 ] = useState(false);

    const handleMouseEnter = () => {
        setImgHovered1(true);
    };

    const handleMouseLeave = () => {
        setImgHovered1(false);
    };

    const hoveredSmallImg1 = ` ${ smallImgHovered1? 'brighten_hover' : 'brighten' }`;

    return (
        <>
            <div className='small-picture three'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img className={hoveredSmallImg1} src={thesisFisma} alt="thesis" />
                <div className="small-blocktext">
                    <h1>Fisma: Design and Prototype</h1>
                    <p>Designer showcase of new prototype product</p>
                </div>
            </div>
        </>
    );
}

export default SmallPic1;