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
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";

const CustomizedButton = styled(Button)`
  color: #3881BC;
  font-size: larger;

  :hover {
    color: #2e8b57;
  }
`;

const data = [
  {
    name: <NavLink to="/"
    end className="nav_link"> Home </NavLink>,
    icon: <Home />,
  },
  {
    name: <NavLink className="nav_link">Environmental Diagnostics</NavLink>,
    icon: <Public/>,
  },
  {
    name: <NavLink to="/animalHealthDiagnostics" className="nav_link">Animal Health Diagnostics</NavLink>,
    icon: <Pets className="nav_link"/>,
  },
  {
    name: <NavLink className="nav_link">Human Diagnostics</NavLink>,
    icon: <Person className="nav_link"/>,
  },
  {
    name: <NavLink className="nav_link">Technical Compliance</NavLink>,
    icon: <Biotech className="nav_link"/>,
  },
  {
    name: <NavLink className="nav_link">
        Product Development & Manufacturing
      </NavLink>,
    icon: <Computer className="nav_link"/>
  },
  { name: <NavLink className="nav_link">Contact Us</NavLink>,
  icon: <ContactSupport className="nav_link"/> },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 300 }} onClick={((e) =>{ 
      e.preventDefault()
      setOpen(false)})}>
      {data.map((item, index) => (
        <ListItem key={index} className="nav_link">{item.icon}
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <div className="navBarContainer">
      <div className="logo">TRACE DIAGNOSTICS, INC.</div>
      <nav className="linksContainer">
        <Button onClick={((e) => {
          e.preventDefault()
          setOpen(true)})}>
          <MenuRounded sx={{ fontSize: "25px", color: "#133158"}}/>
        </Button>
        <Drawer open={open} anchor={"right"} transitionDuration={500}onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </nav>
    </div>
  );
};

export default NavBar;
