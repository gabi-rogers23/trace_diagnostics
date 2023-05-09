import React from "react";
import NavDrawer from "./navDrawer";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="navBarContainer">
      <div className="logo" onClick={((e)=>{
        e.preventDefault();
        navigate("/")
      })}>TRACE DIAGNOSTICS, INC.</div>
      <div><NavDrawer/></div>
    </div>
  );
};

export default NavBar;
