import React from "react";
import { NavLink } from "react-router-dom";

import './StartHere.css';
import InfoImg from "./InfoImg/InfoImg";

const StartHere = () => {
    return (
        <>
            <div className="first">
                <div className="special">
                    <InfoImg />
                    <div className="text-block one">
                        <h1>Learn something new everyday</h1>
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