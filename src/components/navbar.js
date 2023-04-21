import React, {useState} from "react";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from "@mui/material";

import { NavLink } from "react-router-dom";

const data = [
    {name: "Home"},
    { name: "Inbox"},
    { name: "Outbox"},
    { name: "Sent mail"},
    { name: "Draft"},
    { name: "Trash"},
  ];

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );

    return(<div className="navBarContainer">
        <div className="logo">TRACE DIAGNOSTICS, INC.</div>
        <Button onClick={() => setOpen(true)}>Click me</Button>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
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