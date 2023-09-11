import React from "react";
import { Link } from "react-router-dom";

import './InfoImg.css'

import banner from '../../capstone_colmar_assets/images/banner.jpg';

const InfoImg = () => {
    return (
        <> 
            <div className="content">
				<div className="grid">
					<figure className="effect-chico marginall">
						<img src={banner} className="width100" alt="img15"/>
						<figcaption>
							<h2><span></span></h2>
                            <br></br>
							<h1>Lorem ipsum dolor sit amet,consectur adipiscing elit.</h1>
							<Link to="/info" >
                            </Link>
						</figcaption>			
					</figure>
				</div>				
			</div>
        </>
    );
}

export default InfoImg;