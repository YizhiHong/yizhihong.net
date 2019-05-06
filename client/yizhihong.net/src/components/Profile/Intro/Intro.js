import React from "react";
import classes from "./Intro.css";
import Skeleton from "react-loading-skeleton";

const intro = ({ data }) => {
  return (
    <pre className={classes.pre}>
      <code>{data || <Skeleton count={12} />}</code>
    </pre>
  );
};

export default intro;
