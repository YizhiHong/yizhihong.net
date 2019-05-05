import React from "react";

import classes from "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      {props.items.map(e => (
        <NavItem key={e.name} link={e.link} active={e.active}>
          {e.name}
        </NavItem>
      ))}
    </ul>
  );
};

export default NavItems;
