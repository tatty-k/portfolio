import React from 'react';
import './Skills.css'

const Skills = () => {
    return ( 
        <div className="Skills-wrapper">
            <div className="Skills-title">Technologies I Have Used</div>
            <div className="Skills-outer-container">

                <div className="Skills-list-title">Language</div>
                <div className="Skills-list-title">Back-End</div>
                <div className="Skills-list-title">
                    <div>Libraries</div> 
                    <div> & Frameworks</div> 
                </div>

                <ul className="Skills-list">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
                <ul className="Skills-list">
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>PostGresSQL</li>
                </ul>
                <ul className="Skills-list">
                    <li>React</li>
                    <li>Express</li>
                    <li>Django</li>
                    <li>Boostrap</li>
                    <li>jQuery</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Skills;