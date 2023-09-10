import React, {useState} from "react";
import { Link } from "react-router-dom";
import LinkInfo from "../LinkInfo";

import infoCampus from "../../capstone_colmar_assets/images/information-campus.jpg";
import infoCampusMob from "../../capstone_colmar_assets/images/information-campus-mobile.jpg";

const SmallPic2 = () => {
    const [ smallImgHovered2, setImgHovered2 ] = useState(false);

    const handleMouseEnter = () => {
        setImgHovered2(true);
    };

    const handleMouseLeave = () => {
        setImgHovered2(false);
    };

    const hoveredSmallImg2 = `desktop glow_img ${ smallImgHovered2? 'width47_hovered' : 'width35' }`;

    return (
        <>
            <Link to='/learn' className="small-picture photo"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img className={hoveredSmallImg2} src={infoCampus} alt="campus" />
                <img className="mobile" src={infoCampusMob} alt="campus" />
                <div className="small-blocktext">
                    <h1>Our campus</h1>
                    <p>Find which campus is close by you</p>
                    <LinkInfo />
                </div>
            </Link>
        </>
    );
}

export default SmallPic2;