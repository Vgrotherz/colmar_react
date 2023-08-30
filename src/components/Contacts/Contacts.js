import React, { useRef, useEffect } from "react";

import './Contacts.css';

import thesisVideo from "../capstone_colmar_assets/videos/thesis.mp4" ;
import thesisFisma from "../capstone_colmar_assets/images/thesis-fisma.jpg";
import thesisNow from "../capstone_colmar_assets/images/thesis-now-and-then.jpg";


const Contacts = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleEnded = () => {
        videoElement.currentTime = 0;
        videoElement.play();
        };

    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, []);

    return (
        <>
            <div className="four">
                    <div>
                        <h1 className="text-center">Thesis exhibit</h1>
                        <div className="special">
                            <div className="vid marginall">
                                <video ref={videoRef} autoPlay muted>
                                    <source src={thesisVideo} />
                                </video>
                                    <div className="text-block text-hurt desktop">
                                        <h2>Reimagine urban</h2>           
                                        <p>"Curabitur vitae libero in ipsum porttitor consequat. Aliquam et commodo lectus. nec consequat neque. Sed non accumsan urna. Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula."</p>
                                    </div> 
                                </div>
                        {/* <!-- 2 pics aside--> */}
                            <div className="two-pictures desktop">
                                <div className="small-picture three">
                                    <img src={thesisFisma} alt="thesis" />
                                    <div className="small-blocktext">
                                        <h1>Fisma: Design and Prototype</h1>
                                        <p>Designer showcase of new prototype product</p>
                                    </div>
                                </div>
                                <div className="small-picture">
                                    <img src={thesisNow} alt="campus" />
                                    <div className="small-blocktext">
                                        <h1>Now and then</h1>
                                        <p>Research study about New York</p>  
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>             
                </div>
        </>
    );
}

export default Contacts;