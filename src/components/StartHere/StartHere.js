import React from "react";
import { Link, NavLink } from "react-router-dom";

import './StartHere.css';
import InfoImg from "./InfoImg/InfoImg";

const StartHere = () => {
    return (
        <>
            <div className="first">
                <div className="special">
                    {/* <Link to='/info' className="images marginall">   
                        <img className="width100" src={ banner } alt="banner" />
                    </Link>  */}
                    <InfoImg />
                    <div className="text-block one">
                        <h1>Learn something new everyday</h1>
                        {/* <p>Lorem ipsum dolor sit amet,consectur adipiscing elit.</p> */}
                            <NavLink to='/info' className="wrp link">
                                <button className="bttn">Start here</button>
                            </NavLink>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default StartHere;