import React from "react";
import classes from "./Intro.css";

const intro = ({ data }) => {
  return (
    <pre className={classes.pre}>
      <code>{data}</code>
    </pre>
  );
};

export default intro;
