import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../../Navbar/NavItems/NavItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses[1] = classes.Open;
  }
  return (
    <Fragment>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo SideLogo={true} />
        </div>
        <nav onClick={props.closed}>
          <NavItems items={props.menu} />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
