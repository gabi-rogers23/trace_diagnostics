import React from "react";
import NavDrawer from "./navDrawer";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="logo">TRACE DIAGNOSTICS, INC.</div>
      <NavDrawer/>
    </div>
  );
};

export default NavBar;
