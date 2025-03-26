import './navbar.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            {/* //i want list what i want to show in the navbar
            //and then my name in middle  aand again list of what i want to show in the navbar */}
            
            <ul className='Navbar-links'>
            <li><Link to="/">Home</Link></li>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li> 
            </ul>
            <div className='nav-title'>Portfolio</div>
            <ul className='Navbar-links'>
                <li><a href="https://github.com/Shivamsingh7478" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/shivam-singh-b5b298279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bz1QIuqLaRDSRuwy8Ai9gtw%3D%3D" target="_blank">LinkedIn</a></li>
                <li><a href="Instagram">Instagram</a></li>
            </ul>
        </nav>
    );
}