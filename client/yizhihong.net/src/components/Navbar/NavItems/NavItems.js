import React from 'react'

import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'

const items = [
    {"name": "Profile", "link":"/", "active":true},
    {"name": "Projects", "link":"/projects", "active":false},
    {"name": "Contact", "link":"/contact", "active":false}
]

const NavItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            {items.map(e => 
                <NavItem key={e.name} link={e.link} active={e.active}>{e.name}</NavItem>
            )}
        </ul>
    )
}

export default NavItems