import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LinkInfo.css";

const LinkInfo = () => {
    const [ linkA, setLinkA] = useState(false); 

    const mouseEnterLinkA = () => {
        setLinkA(true);
    }

    const mouseLeaveLinkA = () => {
        setLinkA(false);
    }

    const hoveredLinkA = `lnk link_a` ;
    


    return (
        <>
            <Link to="/learn" 
            onMouseEnter={mouseEnterLinkA}
            onMouseLeave={mouseLeaveLinkA} 
            className={hoveredLinkA}>
                <span className="mask">
                    <div className="lnk-container">
                        <span className="lnk-title1 title">READ MORE</span>
                        <span className="lnk-title2 title">READ MORE</span>
                    </div>
                </span>
                <div className="lnk-icon">
                    <svg className="icn" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                    <svg className="icn" width="24" height="24"  fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                </div>
            </Link>
        </>
    );
}

export default LinkInfo;