import React, { useState } from "react";
import { Link } from "react-router-dom";

import LinkInfo from "../LinkInfo";

import infoGuest from "../../capstone_colmar_assets/images/information-guest-lecture.jpg";
import infoGuestMob from "../../capstone_colmar_assets/images/information-guest-lecture-mobile.jpg";

const SmallPic3 = () => {
    const [ smallImgHovered3, setImgHovered3 ] = useState(false);

    const handleMouseEnter = () => {
        setImgHovered3(true);
    };

    const handleMouseLeave = () => {
        setImgHovered3(false);
    };

    const hoveredSmallImg3 = `desktop glow_img ${ smallImgHovered3? 'width47_hovered' : 'width35' }`;

    return (
        <>
            <Link to='/learn' className="small-picture three photo"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img className={hoveredSmallImg3} src={infoGuest} alt="guest" />
                <img className="mobile" src={infoGuestMob} alt="guest" />
                <div className="small-blocktext">
                    <h1>Our guest lecture</h1>
                    <p>Join a keynote with Oliver Sack about<br></br> music in medical treatment</p>
                    <LinkInfo />
                </div>
            </Link>
        </>
    );
}

export default SmallPic3 ;