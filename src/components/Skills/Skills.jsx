import React from 'react';
import './Skills.css'

const Skills = () => {
    return ( 
        <div className="Skills-wrapper">
            <div className="Skills-title">Technologies I Have Used</div>
            <div className="Skills-outer-container">

                <ul className="Skills-list">
                    <li className="Skills-list-title">Languages</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
                <ul className="Skills-list">
                    <li className="Skills-list-title">Back-End</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>PostGresSQL</li>
                </ul>
                <ul className="Skills-list">
                    <li className="Skills-list-title">
                        <div>Libraries</div> 
                        <div> & Frameworks</div> 
                    </li>
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