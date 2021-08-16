import React from "react"
import { slide as Menu } from 'react-burger-menu'
import {Link, withRouter} from 'react-router-dom'

import "./NavBar.css"

class NavBar extends React.Component {
    render()
    {
        const {location} = this.props;

        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const educationClass = location.pathname === '/education' ? 'active-item' : '';
        const experienceClass = location.pathname === '/experience' ? 'active-item' : '';
        const projectsClass = location.pathname === '/project' ? 'active-item' : '';
        const achievementsClass = location.pathname === '/achievements' ? 'active-item' : '';
        const volunteeringClass = location.pathname === '/volunteering' ? 'active-item' : '';
        const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
        const contactClass = location.pathname === '/contact' ? 'active-item' : '';

       
        
     


        return(
            <Menu>
              {  /* We never WANT TO USE <a href=""></a> tag in Router */}
            {/* <a id="home" className="menu-item" href="/">Home</a> */}

            <Link to = "/" className={`menu-item ${homeClass}`}>Home</Link>
            <Link to = "/about" className = {`menu-item ${aboutClass}`}>About</Link>
            <Link to = "/education" className ={`menu-item ${educationClass}`}>Education</Link>
            <Link to = "/experience" className = {`menu-item ${experienceClass}`}>Experience</Link>
            <Link to = "/projects" className = {`menu-item ${projectsClass}`}>Projects</Link>
            <Link to = "/achievements" className ={`menu-item ${achievementsClass}`}>Achievements</Link>
            <Link to = "/volunteering" className = {`menu-item ${volunteeringClass}`}>Volunteering</Link>
            <Link to = "/skills" className = {`menu-item ${skillsClass}`}>Skills</Link>
            <Link to = "/contact" className = {`menu-item ${contactClass}`}>Contact</Link>

           
            
          </Menu>
        )
    }
}

export default withRouter (NavBar)

