import React from "react";
import logo from "./assets/GitHub-Mark-64px.png";

const github = props => {
  return (
    <a
      href="https://github.com/YizhiHong"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={logo}
        style={{
          width: "28px",
          marginLeft: "20px"
        }}
        alt="GITHUB"
      />
    </a>
  );
};

export default github;
