import React from 'react';
import './About.css'
import myPic from '../../images/tatanya - photo.png';

const About = () => {
    return ( 
        <div className="About-container">
            <div className="About-info-container">
                <div className="About-location">Location:  San Francisco Bay Area</div> 

                <div className="About-description">
                Former Honey bee researcher turned science teacher turned 
                Software Engineer. Passionate about problem solving and 
                skilled in analyzing data, building relationships and 
                collaboration.
                </div>
            </div>
            <img className="my-pic" src={myPic} alt="Tatanya Klass"/>
        </div>
     );
}
 
export default About;