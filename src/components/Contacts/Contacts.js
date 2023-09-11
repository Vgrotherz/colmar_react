import React, { useRef, useEffect } from "react";

import './Contacts.css';

import SmallPic1 from "./SmallPics/SmallPic1";
import SmallPic2 from "./SmallPics/SmallPic2";

import thesisVideo from "../capstone_colmar_assets/videos/thesis.mp4" ;


const Contacts = ({ smallImgHovered1, smallImgHovered2 }) => {
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
                                <SmallPic1 smallImgHovered1={smallImgHovered1} />
                                <SmallPic2 smallImgHovered2={smallImgHovered2} />
                            </div>
                        </div> 
                    </div>             
                </div>
        </>
    );
}

export default Contacts;