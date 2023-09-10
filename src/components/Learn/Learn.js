import React from "react";
import './Learn.css'

import Midpic1 from "./MidpicLine1/Midpic1";
import Midpic2 from "./MidpicLine2/MIdpic2";
import Midpic3 from "./MidpicLine3/Midpic3";
import Midpic4 from "./MidpicLine4/Midpic4";
import Midpic5 from "./MidpicLine5/Midpic5";
import Midpic6 from "./MIdpicLine6/MIdpic6";


const Learn = ( {isHovered1, isHovered2, isHovered3, isHovered4, isHovered5, isHovered6}) => {

    return (
        <div className="third">
            <div className="block-three">
                <h1 className="marginup">Start learning</h1>
                <div className="six-pics">
                    <div className="special_two">
                        <div className="midpic-line">  
                            <Midpic1 isHovered1={isHovered1} />                         
                            <Midpic2 isHovered2={isHovered2} />
                            <Midpic3 isHovered3={isHovered3} />
                        </div>
                        <div className="midpic-line">                            
                            <Midpic4 isHovered4={isHovered4} />
                            <Midpic5 isHovered5={isHovered5} />
                            <Midpic6 isHovered6={isHovered6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learn;