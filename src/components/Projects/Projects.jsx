import React from 'react';
import { Link } from 'react-router-dom';
import recLanding from '../../images/rec-landing-1.png';
import recRecs from '../../images/rec-recs.png';
import './Projects.css';

const Projects = () => {
    return ( 
        <div className="Projects-container">

            <div className="Projects-col1">
                <div className="Projects-title">Recommend</div>
                
                <div className="Projects-info-containter">
                    <div className="Projects-info-title">Process</div>
                    <div className="Projects-info-description">I designed and 
                    built recommend because I wanted an easy way to keep track 
                    of suggestions I received from my friends for good places 
                    to eat or books to read. With Recommend, users can log in 
                    and create a group. Once the group is created, friends can 
                    make recommendations within the group, in a fun social 
                    environment. </div>

                    <div className="Projects-info-title">Tech Stack</div>
                    <div className="Projects-info-description">MongoDB, Express, 
                    React, Node.js, Bootstrap, JavaScript and Heroku</div>

                    <div className="Projects-info-title">Notable Features</div>
                    <div className="Projects-info-description">Recommend leverages JWS 
                    tolken-based authentication and is mobile first with a responsive
                    design</div>
                </div>

                <div className="Projects-buttons-container">
                    <Link className="Projects-buttons" id="demo">Demo</Link>
                    <Link className="Projects-buttons" id="source">View Source</Link>
                </div>
            </div>

            <div className="Projects-col2">
                <img className="rec-landing" src={recLanding} />
                <img className="rec-recs" src={recRecs}/>
            </div>
        </div>
     );
}
 
export default Projects;