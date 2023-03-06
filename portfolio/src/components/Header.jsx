import { NavLink } from "react-router-dom";

function Header() {
    return  <>
     
       <h5> Front End Web Developer</h5>
      
    
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="/">Home</a>
               <NavLink to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
                <a href="/contact">Contact</a>
                <NavLink to="/contact" end>Contact</NavLink>
            </li>
            <li className="nav-item">
                <a href="/projects">Projects</a>
                <NavLink to="/projects" end>Projects</NavLink>
            </li>
        </ul>
   </>
}

export default Header;