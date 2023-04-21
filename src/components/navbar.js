import React, { useState } from "react";
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  MenuRounded,
  Home,
  Public,
  Pets,
  Biotech,
  Person,
  Computer,
  ContactSupport
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

const data = [
  {
    name: <NavLink className="nav_link"> Home </NavLink>,
    icon: <Home />,
  },
  {
    name: <NavLink className="nav_link">Environmental Diagnostics</NavLink>,
    icon: <Public />,
  },
  {
    name: <NavLink className="nav_link">Animal Health Diagnostics</NavLink>,
    icon: <Pets />,
  },
  {
    name: <NavLink className="nav_link">Human Diagnostics</NavLink>,
    icon: <Person />,
  },
  {
    name: <NavLink className="nav_link">Technical Compliance</NavLink>,
    icon: <Biotech />,
  },
  {
    name: <NavLink className="nav_link">
        Product Development and Manufaturing
      </NavLink>,
    icon: <Computer />
  },
  { name: <NavLink className="nav_link">Contact Us</NavLink>,
  icon: <ContactSupport /> },
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

  return (
    <div className="navBarContainer">
      <div className="logo">TRACE DIAGNOSTICS, INC.</div>
      <nav className="linksContainer">
        <Button onClick={() => setOpen(true)}>
          <MenuRounded />
        </Button>
        <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </nav>
    </div>
  );
};

export default NavBar;
