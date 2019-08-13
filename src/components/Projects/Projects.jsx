import React from 'react';
import { Link } from 'react-router-dom';
import recLanding from '../../images/rec-landing-1.png';
import recRecs from '../../images/rec-recs.png';
import cacheLanding from '../../images/cache-landing.png';
import recSavings from '../../images/cache-savings.png';
import warmlyProfile from '../../images/warmly-profile.png';
import warmlyChat from '../../images/warmly-chat.png';
import './Projects.css';

const Projects = () => {
    return ( 
        <div className="Projects-container">
                {/* Recommend */}
            <div className="Project-container">

                <div className="Projects-col1">
                    <div className="Projects-title">Recommend</div>
                    
                    <div className="Projects-info-containter">
                        <div className="Projects-info-title">Process</div>
                        <div className="Projects-info-description">I designed and 
                        built recommend because I wanted an easy way to keep track 
                        of suggestions I received from my friends for good places 
                        to eat or books to read. With Recommend, users can log in,
                        create a group, and share their recommendations.</div>

                        <div className="Projects-info-title">Tech Stack</div>
                        <div className="Projects-info-description">MongoDB, Express, 
                        React, Node.js, Bootstrap, JavaScript and Heroku</div>

                        <div className="Projects-info-title">Notable Features</div>
                        <div className="Projects-info-description">Recommend leverages JWS 
                        tolken-based authentication and is mobile first with a responsive
                        design</div>
                    </div>

                    <div className="Projects-buttons-container">
                        <a className="Projects-buttons" href="https://recommend-react.herokuapp.com/" target="_blank">Demo</a>
                        <a className="Projects-buttons" id="source" href="https://github.com/tatty-k/recommend" target="_blank">Source</a>
                    </div>
                </div>

                <div className="Projects-col2">
                    <img className="rec-landing" src={recLanding} alt="Landing Page"/>
                    <img className="rec-recs" src={recRecs} alt="Recommendation Page"/>
                </div>
            </div>

                    {/* cacheGrow */}

            <div className="Project-container">

                <div className="Projects-col1">
                    <div className="Projects-title">cacheGrow</div>
                
                        <div className="Projects-info-containter">
                            <div className="Projects-info-title">Process</div>
                            <div className="Projects-info-description">cacheGrow is a budgeting 
                            app designed to motivate users to spend less through createing
                            savings goals and tracking savings. </div>

                            <div className="Projects-info-title">Tech Stack</div>
                            <div className="Projects-info-description">MongoDB, Express, 
                            Node.js, Bootstrap, Chart.js, JavaScript and Heroku</div>

                            <div className="Projects-info-title">Notable Features</div>
                            <div className="Projects-info-description">In building cacheGrow, I 
                            implemented Google OAuth. cacheGrow is mobile first with a responsive 
                            design</div>
                        </div>

                        <div className="Projects-buttons-container">
                        <a className="Projects-buttons" href="http://cache-grow.herokuapp.com/" target="_blank">Demo</a>
                        <a className="Projects-buttons" id="source" href="https://github.com/tatty-k/cacheGrow" target="_blank">Source</a>
                        </div>
                    </div>

                    <div className="Projects-col2">
                        <img className="rec-landing" src={cacheLanding} alt="Landing Page"/>
                        <img className="rec-recs" src={recSavings} alt="Savings Page"/>
                </div>
            </div>

                    {/* Warmly */}

            <div className="Project-container">

                <div className="Projects-col1">
                    <div className="Projects-title" id="warmly">Warmly</div>
                
                        <div className="Projects-info-containter">
                            <div className="Projects-info-title">Process</div>
                            <div className="Projects-info-description">Warmly 
                            is a collaborative project that won 2nd place at the
                            LinkedIn Hackathon for Economic Opportunity. This app 
                            provides a chatroom for college classrooms, providing  
                            a space for students to build meaningful connections 
                            in a comfortable online environment</div>

                            <div className="Projects-info-title">Tech Stack</div>
                            <div className="Projects-info-description">JavaScript, HTML, CSS, 
                            Express, Mustache templating, Heroku</div>

                            <div className="Projects-info-title">Notable Features</div>
                            <div className="Projects-info-description">Warmly leverages socket.io 
                            for real time chat functionality</div>
                        </div>

                        <div className="Projects-buttons-container">
                            <a className="Projects-buttons" id="warmly-demo" href="https://warmly.herokuapp.com/" target="_blank">Demo</a>
                        </div>
                    </div>

                    <div className="Projects-col2">
                        <img className="rec-landing" src={warmlyProfile} alt="Landing Page"/>
                        <img className="rec-recs" src={warmlyChat} alt="Savings Page"/>
                    </div>
            </div>


        </div>
     );
}
 
export default Projects;