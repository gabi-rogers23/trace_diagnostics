import React, {useState} from "react";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from "@mui/material";
import { AccessAlarm, MenuRoundedIcon } from '@mui/icons-material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// import HomeIcon from '@mui/icons-material/Home'; 

import { NavLink } from "react-router-dom";

const data = [
    {
      name: <NavLink className="nav_link"> Home </NavLink>,
      icon: <AccessAlarm/>,
    },
    { name: <NavLink className="nav_link">Environmental Diagnostics</NavLink>},
    { name: <NavLink className="nav_link">Animal Health Diagnostics</NavLink>},
    { name: <NavLink className="nav_link">Technical Compliance</NavLink>},
    { name: <NavLink className="nav_link">Product Development and Manufaturing</NavLink>},
    { name: <NavLink className="nav_link">Contact Us</NavLink> },
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
    <nav className="linksContainer">
        <Button onClick={() => setOpen(true)}><MenuRoundedIcon/></Button>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </nav>
    </div>)
    }
    
    export default NavBar;