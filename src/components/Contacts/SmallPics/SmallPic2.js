import React, { useState } from "react";

import thesisNow from "../../capstone_colmar_assets/images/thesis-now-and-then.jpg"

const SmallPic2 = () => {
    const [ smallImgHovered2, setImgHovered2 ] = useState(false);

    const handleMouseEnter = () => {
        setImgHovered2(true);
    };

    const handleMouseLeave = () => {
        setImgHovered2(false);
    };

    const hoveredSmallImg2 = ` ${ smallImgHovered2? 'brighten_hover' : 'brighten' }`;
    return (
        <>
            <div className="small-picture"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img className={hoveredSmallImg2} src={thesisNow} alt="campus" />
                    <div className="small-blocktext">
                    <h1>Now and then</h1>
                    <p>Research study about New York</p>  
                </div>
            </div>

        </>
    );
}

export default SmallPic2;