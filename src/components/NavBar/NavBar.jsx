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
                    <Link className="NavBar-contact">email</Link>
                    <Link className="NavBar-contact">github</Link>
                    <Link className="NavBar-contact">linkedIn</Link>
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