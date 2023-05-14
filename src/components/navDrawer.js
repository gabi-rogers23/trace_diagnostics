import React, { useState } from "react";
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Fab,
} from "@mui/material";
import {
  MenuRounded,
  Home,
  Public,
  Pets,
  Biotech,
  Person,
  Computer,
  ContactSupport,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: (
      <NavLink to="/" end className="nav_link">
        {" "}
        Home{" "}
      </NavLink>
    ),
    icon: <Home className="nav_link" />,
  },
  {
    name: (
      <NavLink to="/environmentalDiagnostics" className="nav_link">
        Environmental Diagnostics
      </NavLink>
    ),
    icon: <Public className="nav_link" />,
  },
  {
    name: (
      <NavLink to="/animalHealthDiagnostics" className="nav_link">
        Animal Health Diagnostics
      </NavLink>
    ),
    icon: <Pets className="nav_link" />,
  },
  {
    name: (
      <NavLink to="/HumanDiagnostics" className="nav_link">
        Human Diagnostics
      </NavLink>
    ),
    icon: <Person className="nav_link" />,
  },
  {
    name: (
      <NavLink to="/technicalCompliance" className="nav_link">
        Technical Compliance
      </NavLink>
    ),
    icon: <Biotech className="nav_link" />,
  },
  {
    name: (
      <NavLink to="/productDevelopment" className="nav_link">
        Product Development & Manufacturing
      </NavLink>
    ),
    icon: <Computer className="nav_link" />,
  },
  {
    name: (
      <NavLink to="/contactUs" className="nav_link">
        Contact Us
      </NavLink>
    ),
    icon: <ContactSupport className="nav_link" />,
  },
];

const NavDrawer = () => {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div
      style={{ width: 300 }}
      onClick={(e) => {
        e.preventDefault();
        setOpen(false);
      }}
    >
      {data.map((item, index) => (
        <div key={index}>
          <ListItem>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </div>
      ))}
    </div>
  );

  return (
    <nav className="linksContainer">
      <Fab
        variant="contained"
        size={"medium"}
        sx={{ backgroundColor: "white" }}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <MenuRounded sx={{ color: "#081f6b" }} />
      </Fab>
      <Drawer
        open={open}
        sx={{ borderRadius: "50%" }}
        anchor={"right"}
        transitionDuration={500}
        onClose={() => setOpen(false)}
      >
        {getList()}
      </Drawer>
    </nav>
  );
};

export default NavDrawer;
