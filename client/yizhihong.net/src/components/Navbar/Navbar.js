import React from "react";

import classes from "./Navbar.css";
import NavItems from "./NavItems/NavItems";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../Logo/Logo";

const Navbar = props => {
  return (
    <header className={classes.Navbar}>
      <DrawerToggle clicked={props.clicked}>menu</DrawerToggle>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems items={props.menu} />
      </nav>
    </header>
  );
};

export default Navbar;
