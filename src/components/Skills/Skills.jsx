import React from 'react';
import './Skills.css'

const Skills = () => {
    return ( 
        <div className="Skills-wrapper">
            <div className="Skills-title">Technologies I Have Used</div>
            <div className="Skills-outer-container">

                <div>Language</div>
                <div>Back-End</div>
                <div>Libraries/Frameworks</div>
                <div>Workflow/Version Control</div>

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
                <ul className="Skills-list">
                    <li>Git</li>
                    <li>Gothub</li>
                    <li>Trello</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Skills;