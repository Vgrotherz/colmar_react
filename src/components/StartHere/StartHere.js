import React from "react";
import { NavLink } from "react-router-dom";

import banner from '../capstone_colmar_assets/images/banner.jpg';

import './StartHere.css';


const StartHere = () => {
    return (
        <>
            <div className="first">
                <div className="special">     
                    <img className="images marginall" src={ banner } alt="banner" />
                    <div className="text-block one">
                        <h1>Learn something new everyday</h1>
                        <p>Lorem ipsum dolor sit amet,consectur adipiscing elit.</p>
                        
                            {/* <NavLink to='/info' className="button">
                                <p>Start here</p>
                            </NavLink> */}
                            <NavLink to='/info' className="wrp">
                                <button class="bttn">Submit</button>
                            </NavLink>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default StartHere;