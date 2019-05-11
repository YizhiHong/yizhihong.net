import React, { Fragment } from "react";

import { IconContext } from "react-icons";

const style = {
  Education: {
    float: "left",
    margin: "0 5",
    color: "green"
  },
  Experience: {
    float: "left",
    margin: "0 5 0 6",
    color: "rgb(143, 92, 44)"
  },
  Other: {
    float: "left",
    margin: "0 5"
  },
  web: {
    float: "left",
    margin: "1 5 0 0"
  },
  title: {
    float: "left",
    margin: "0 7"
  },
  location: {
    float: "right",
    margin: "1 0 0 5"
  },
  date: {
    float: "right",
    margin: "0 2 0 5"
  },
  projects: {
    float: "left",
    marginTop: "5"
  }
};

const Icon = ({
  size = "18px",
  fontcolor = "black",
  classname,
  name,
  children
}) => {
  let classes = Array.isArray(classname) ? classname.join(" ") : classname;
  return (
    <IconContext.Provider
      value={{
        size: size,
        color: fontcolor,
        className: classes,
        style: style[name]
      }}
    >
      <Fragment>{children}</Fragment>
    </IconContext.Provider>
  );
};

export default Icon;
