import React from "react";
import { NavLink } from "react-router-dom";
import './Learn.css'

import courseSoftware from '../capstone_colmar_assets/images/course-software.jpg';
import courseComputer from '../capstone_colmar_assets/images/course-computer-art.jpg';
import courseDesign from '../capstone_colmar_assets/images/course-design.jpg';
import courseData from '../capstone_colmar_assets/images/course-data.jpg';
import courseBusiness from "../capstone_colmar_assets/images/course-business.jpg";
import courseMarketing from "../capstone_colmar_assets/images/course-marketing.jpg";


const Learn = () => {
    return (
        <div className="third">
            <div className="block-three">
                <h1 className="marginup">Start learning</h1>
                <div className="six-pics">
                    <NavLink to='/' className="special_two">
                        <div className="midpic-line">                           
                                <div className="midpic midpic-slave">
                                    <img className="desktop" src={courseSoftware} alt="soft course" />
                                    <div className="midpic-text">    
                                        <h2>Software engineering</h2>
                                        <p className="midpic-text-p desktop" >COURSES</p>
                                        <p className="desktop" >Web Development, Mobile Development, iOT, APIs</p>
                                    </div>
                                </div>
                                <div className="midpic midpic-slave">
                                    <img className="desktop" src={courseComputer} alt="comp art" />
                                    <div className="midpic-text">    
                                        <h2>Computer art</h2>
                                        <p className="midpic-text-p desktop" >COURSES</p>
                                        <p className="desktop" >Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation</p>
                                    </div>
                                </div>
                                <div className="midpic midpic-slave">
                                    <img className="desktop" src={courseDesign} alt="design course" />
                                    <div className="midpic-text">    
                                        <h2>Design</h2>
                                        <p className="midpic-text-p desktop" >COURSES</p>
                                        <p className="desktop" >User Experience Design, User Research, Visual Design</p>
                                    </div>
                                </div>
                        </div>
                        <div className="midpic-line">                           
                            <div className="midpic midpic-slave">
                                <img className="desktop" src={courseData} alt="data course" />
                                <div className="midpic-text">    
                                    <h2>Data</h2>
                                    <p className="midpic-text-p desktop" >COURSES</p>
                                    <p className="desktop" >Data Science, Big Date, SQL, Data Visualiation</p>
                                </div>
                            </div>
                            <div className="midpic midpic-slave">
                                <img className="desktop" src={courseBusiness} alt="business course" />
                                <div className="midpic-text">    
                                    <h2>Business</h2>
                                    <p className="midpic-text-p desktop" >COURSES</p>
                                    <p className="desktop" >Product Development, Business Development, Startup</p>
                                </div>
                            </div>
                            <div className="midpic midpic-slave">
                                <img className="desktop" src={courseMarketing} alt="marketing course" />
                                <div className="midpic-text">    
                                    <h2>Marketing</h2>
                                    <p className="midpic-text-p desktop" >COURSES</p>
                                    <p className="desktop">Analytics, Content Marketing, Mobile marketing</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Learn;