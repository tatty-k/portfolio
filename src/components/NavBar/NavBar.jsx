import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className="NavBar-container">
            <div className="NavBar-top-container">
                <div className="NavBar-name">TATANYA KLASS</div>
                <div className="NavBar-title">Web Developer</div>

                <div className="NavBar-contact-container">
                    <Link className="NavBar-email">email</Link>
                    <Link className="NavBar-github">github</Link>
                    <Link className="NavBar-linkedin">linkedIn</Link>
                </div>
            </div>

            <div className="NavBar-link-container">
                <Link className="NavBar-link" to={'/'}>About</Link>
                <Link className="NavBar-link" to={'/projects'}>Projects</Link>
                <Link className="NavBar-link" to={'/skills'}>Skills</Link>
            </div>
        </div>
     );
}
 
export default NavBar;