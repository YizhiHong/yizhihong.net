import React from "react";

const style = {
  display: "flex",
  height: '80vh',
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center"
};

const Error = props => {
  return (
    <div style={style}>
      <h1>OPPS! 404 NOT FOUND</h1>
    </div>
  );
};

export default Error;
