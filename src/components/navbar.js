import React from "react";
import NavDrawer from "./navDrawer";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="logo">TRACE DIAGNOSTICS, INC.</div>
      <div><NavDrawer/></div>
    </div>
  );
};

export default NavBar;
