import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(<div className="navBarContainer">
        <div className="logo">TRACE DIAGNOSTICS, INC.</div>
    <nav className="linksContainer">
        <NavLink className="nav_link"> Home </NavLink>
        <NavLink className="nav_link">Environmental Diagnostics</NavLink>
        <NavLink className="nav_link">Animal Health Diagnostics</NavLink>
        <NavLink className="nav_link">Technical Compliance</NavLink>
        <NavLink className="nav_link">Product Development and Manufaturing</NavLink>
        <NavLink className="nav_link">Contact Us</NavLink>
    </nav>
    </div>)
    }
    
    export default NavBar;