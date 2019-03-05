import React from 'react'

import classes from './Navbar.css'
import NavItems from './NavItems/NavItems'

const Navbar = (props) => {
    return (
        <header className={classes.Navbar}>
            <div className={classes.Logo}>
                
            </div>
            <NavItems className={classes.DesktopOnly}>
                
            </NavItems>
        </header>
    )
}

export default Navbar

