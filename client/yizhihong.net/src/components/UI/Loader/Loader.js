import React from "react";
import Classes from "./Loader.css";

const Loader = props => {
  const size = {
    fontSize: props.size || "20px"
  };
  return (
    <div className={Classes.loader} style={size}>
      loading
    </div>
  );
};

export default Loader;
