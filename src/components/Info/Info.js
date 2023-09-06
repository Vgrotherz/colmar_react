import React from "react";
import { Link } from "react-router-dom";

import LinkInfo from "./LinkInfo";

import infoMain from "../capstone_colmar_assets/images/information-main.jpg";
import infoOrientation from "../capstone_colmar_assets/images/information-orientation.jpg";
import infoOrientationMob from "../capstone_colmar_assets/images/information-orientation-mobile.jpg";
import infoCampus from "../capstone_colmar_assets/images/information-campus.jpg";
import infoCampusMob from "../capstone_colmar_assets/images/information-campus-mobile.jpg";
import infoGuest from "../capstone_colmar_assets/images/information-guest-lecture.jpg";
import infoGuestMob from "../capstone_colmar_assets/images/information-guest-lecture-mobile.jpg";


import './Info.css';


const Info = () => {
    return (
        <div className="second">
                <div className="special">
                    <div className="images marginall desktop">
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
                        <Link to='/learn' className="small-picture photo">
                            <img id="small-picture-one" className="desktop glow_img" src={infoOrientation} alt="info" />
                            <img className="mobile" src={infoOrientationMob} alt="info" />
                            <div className="small-blocktext">
                                <h1>Orientation date</h1>
                                <p>Tue 10/11 & Wed 10/12: 8am-3pm</p>
                                <LinkInfo />
                            </div>
                        </Link>
                        <Link to='/learn' className="small-picture photo">
                            <img className="desktop glow_img" src={infoCampus} alt="campus" />
                            <img className="mobile" src={infoCampusMob} alt="campus" />
                            <div className="small-blocktext">
                                <h1>Our campus</h1>
                                <p>Find which campus is close by you</p>
                                <LinkInfo />
                            </div>
                        </Link>
                        <Link to='/learn' className="small-picture three photo">
                            <img className="desktop glow_img" src={infoGuest} alt="guest" />
                            <img className="mobile" src={infoGuestMob} alt="guest" />
                            <div className="small-blocktext">
                                <h1>Our guest lecture</h1>
                                <p>Join a keynote with Oliver Sack about<br></br> music in medical treatment</p>
                                <LinkInfo />
                            </div>
                        </Link>
                    </div>
                </div>              
            </div>
    ) ;
}

export default Info;