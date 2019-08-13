import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className="NavBar-outer-container">
        <div className="NavBar-container">
            <div className="NavBar-top-container">
                <div className="NavBar-name">TATANYA KLASS</div>
                <div className="NavBar-title">Web Developer</div>
                <div className="NavBar-email">tattyklass@gmail.com</div>

                <div className="NavBar-contact-container">
                    <a className="NavBar-contact" href="https://github.com/tatty-k" target="_blank" >GitHub</a>
                    <a className="NavBar-contact" href="https://linkedin.com/in/tatanyaklass" target="_blank" >LinkedIn</a>
                </div>
            </div>

            <div className="NavBar-link-container">
                <Link className="NavBar-link" to={'/'}>About</Link>
                <Link className="NavBar-link" to={'/projects'}>Projects</Link>
                <Link className="NavBar-link" to={'/skills'}>Skills</Link>
            </div>
        </div>
        </div>
     );
}
 
export default NavBar;