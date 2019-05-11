import React from "react";

import classes from "./Button.css";

const button = props => {
  return (
    <button
      id={props.id}
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
    >{props.children}</button>
  );
};

export default button;
