import React from "react";
import classes from "./NavItem.css";
import { NavLink } from "react-router-dom";

const NavItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink to={props.link} exact activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default NavItem;
