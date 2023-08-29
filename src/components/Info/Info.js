import React from "react";
import { Link } from "react-router-dom";

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
                        <img src={infoMain} alt="Main info" />
                            <div className="text-block text-hurt">
                                <h1>It doesn't hurt to keep practicing</h1>
                                <p>"Curabitur vitae libero in ipsum porttitor consequat. Aliquam et commodo lectus, nec consequat neque. Sed non accumsan urna. Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula"</p>
                            </div> 
                            <div className="text-low">
                                <p>Emanuel, Sr Strategist at Hiring.com</p>
                            </div>
                        </div>
                    {/* <!-- 3 pics aside--> */}
                    <Link to='/learn' className="three-pictures">
                        <div className="small-picture">
                            <img id="small-picture-one" className="desktop" src={infoOrientation} alt="info" />
                            <img className="mobile" src={infoOrientationMob} alt="info" />
                            <div className="small-blocktext">
                                <h1>Orientation date</h1>
                                <p>Tue 10/11 & Wed 10/12: 8am-3pm</p>
                                <Link to="/learn" className="link_a">Read more</Link>
                            </div>
                        </div>
                        <div className="small-picture">
                            <img className="desktop" src={infoCampus} alt="campus" />
                            <img className="mobile" src={infoCampusMob} alt="campus" />
                            <div className="small-blocktext">
                                <h1>Our campus</h1>
                                <p>Find which campus is close by you</p>
                                <Link to="/learn" className="link_a">Read more</Link>
                            </div>
                        </div>
                        <div className="small-picture three">
                            <img className="desktop" src={infoGuest} alt="guest" />
                            <img className="mobile" src={infoGuestMob} alt="guest" />
                            <div className="small-blocktext">
                                <h1>Our guest lecture</h1>
                                <p>Join a keynote with Oliver Sack about music in medical treatment</p>
                                <Link to="/learn" className="link_a">Read more</Link>
                            </div>
                        </div>
                    </Link>
                </div>              
            </div>
    ) ;
}

export default Info;