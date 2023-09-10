import React, { useState } from "react" ; 
import { Link } from "react-router-dom";
import LinkInfo from "../LinkInfo";


import infoOrientation from "../../capstone_colmar_assets/images/information-orientation.jpg" ; 
import infoOrientationMob from "../../capstone_colmar_assets/images/information-orientation-mobile.jpg" ;

const SmallPic1 = () => {
    const [ smallImgHovered1, setImgHovered1 ] = useState(false);

    const handleMouseEnter = () => {
        setImgHovered1(true);
    };

    const handleMouseLeave = () => {
        setImgHovered1(false);
    };

    const hoveredSmallImg1 = `desktop glow_img ${ smallImgHovered1? 'width47_hovered' : 'width35' }`;

    return (
        <>
            <Link to='/learn' className="small-picture photo"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img id="small-picture-one" className={hoveredSmallImg1} src={infoOrientation} alt="info" />
                <img className="mobile" src={infoOrientationMob} alt="info" />
                <div className="small-blocktext">
                    <h1>Orientation date</h1>
                    <p>Tue 10/11 & Wed 10/12: 8am-3pm</p>
                    <LinkInfo />
                </div>
            </Link>
        </>
    );
}

export default SmallPic1 ;