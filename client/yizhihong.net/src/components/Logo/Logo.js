import React from 'react'

import classes from './Logo.css'

const logo = (props) => {
  let styles = [classes.logo, props.custom ? classes.SideLogo : null]
  return (<div className={styles.join(" ")}>
  </div>)
};

export default logo
