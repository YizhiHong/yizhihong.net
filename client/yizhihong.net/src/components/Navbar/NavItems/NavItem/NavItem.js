import React from 'react'
import classes from './NavItem.css'


const NavItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link}
      className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
)

export default NavItem
