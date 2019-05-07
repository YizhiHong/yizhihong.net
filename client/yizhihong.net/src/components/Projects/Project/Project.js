import React, { Fragment } from "react";
import Classes from "./Project.css";
import { withTimeParser, isImage } from "../../../hoc/utils";

const project = props => {
  let proj = props.proj;

  return (
    <Fragment>
      <h4>{proj.name}</h4>
      <h5>{withTimeParser(proj.date)}</h5>
      <p>{proj.decs}</p>
      <ul className="">
        {proj.details.map(detail => {
          return <li key={detail}>{detail}</li>;
        })}
      </ul>
      <h5>Powered by:</h5>
      <div className={Classes.tech}>
        {proj.techniques.map(tech => {
          return (
            <div key={tech.name} className={Classes.techLogo}>
              {tech.img === "null" ? (
                <span key={tech.name}>{tech.name}</span>
              ) : (
                <img alt={tech.name} src={tech.img} />
              )}
            </div>
          );
        })}
      </div>
      {proj.link ? (
        isImage(proj.link) ? (
          <div className={Classes.qrcode}>
            <span>Scan Here</span>
            <img  alt={proj.name} src={proj.link} />
          </div>
        ) : (
          <a href={proj.link} rel="noopener noreferrer" target="_blank">
            {proj.name}
          </a>
        )
      ) : (
        <span>Not ready for visitor or Project already closed</span>
      )}
    </Fragment>
  );
};

export default project;
