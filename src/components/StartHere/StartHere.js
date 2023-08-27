import React from "react";
import banner from '../capstone_colmar_assets/images/banner.jpg';
import './StartHere.css';


const StartHere = () => {
    return (
        <>
            <div class="first">
                <div class="special">     
                    <img className="images marginall" src={ banner } alt="banner" />
                    <div class="text-block one">
                        <h1>Learn something new everyday</h1>
                        <p>Lorem ipsum dolor sit amet,consectur adipiscing elit.</p>
                        <div class="button">
                            <p>Start here</p>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default StartHere;