import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.css";

const button = props => {
  return (
    <button
      id={props.id}
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

button.propTypes = {
  id: PropTypes.string,
  clicked: PropTypes.func.isRequired
};

export default button;
