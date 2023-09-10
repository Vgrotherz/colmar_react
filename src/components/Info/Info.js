import React from "react";

import SmallPic1 from "./smallPics/SmallPic1";
import SmallPic2 from "./smallPics/SmallPic2";
import SmallPic3 from "./smallPics/SmallPic3";

import infoMain from "../capstone_colmar_assets/images/information-main.jpg";

import './Info.css';

const Info = ({ smallImgHovered1, smallImgHovered2, smallImgHovered3 }) => {

    return (
        <div className="second">
                <div className="special">
                    <div className="images marginall desktop"
                        >
                        <img src={infoMain} className="opacity_hover" alt="Main info" />
                            <div className="text-block text-hurt">
                                <h1>It doesn't hurt to keep practicing</h1>
                                <p>"Curabitur vitae libero in ipsum porttitor consequat. Aliquam et commodo lectus, nec consequat neque. Sed non accumsan urna. Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula"</p>
                            </div> 
                            <div className="text-low">
                                <p>Emanuel, Sr Strategist at Hiring.com</p>
                            </div>
                        </div>
                    {/* <!-- 3 pics aside--> */}
                    <div className="three-pictures">
                        <SmallPic1 smallImgHovered1={smallImgHovered1} />
                        <SmallPic2 smallImgHovered2={smallImgHovered2} />
                        <SmallPic3 smallImgHovered3={smallImgHovered3} />
                    </div>
                </div>              
            </div>
    ) ;
}

export default Info;