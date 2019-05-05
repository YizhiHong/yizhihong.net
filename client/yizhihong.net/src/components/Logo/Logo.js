import React from 'react'

import classes from './Logo.css'

const logo = (props) => {
  
  let styles = props.SideLogo ?
      [classes.logo,  classes.logoMobile, classes.SideLogo] : [classes.logo]
  return (<div className={styles.join(" ")}>
  </div>)
};

export default logo
