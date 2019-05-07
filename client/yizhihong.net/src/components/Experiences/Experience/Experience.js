import React, { Fragment } from "react";
import Classes from "./Experience.css";
import { withTimeParser, withDetailsParser } from "../../../hoc/utils";
import Button from "../../UI/Button/Button";

const Info = props => {
  const el = props.data;
  return (
    <div>
      <div className={Classes.titleBlock}>
        <h4 className={Classes.name}>{el.name}</h4>
        <h4 className={Classes.location}>{el.location}</h4>
      </div>
      <div className={Classes.titleBlock}>
        <h5>{el.title}</h5>
        <h5 className={Classes.date}>
          {withTimeParser(el.startDate)} - {withTimeParser(el.endDate)}
        </h5>
      </div>
      <div className={Classes.details}>{details(el.details, el.type)}</div>
      <div>
        <span className={Classes.title}>PROJECTS:</span>
        {el.projects.map(proj => (
          <Button
            key={proj.id}
            clicked={() => props.viewProject(proj.id)}
            className={Classes.Button}
          >
            {proj.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

const details = (data, type) => {
  const d = withDetailsParser(data);
  switch (type) {
    case "Education":
      const courses = [];
      for (let c of d.Course) {
        courses.push(<span key={c}> {c}</span>);
      }
      return (
        <Fragment>
          <span>GPA: {d.GPA}</span>
          <div>Courses: {courses}</div>
        </Fragment>
      );
    case "Experience":
      const exp = [];
      for (let val of Object.values(d)) {
        exp.push(<li key={val}>{val}</li>);
      }
      return <ul>{exp}</ul>;
    default:
      return null;
  }
};

const experience = props => {
  return (
    <div className={Classes.block}>
      <Info {...props} />
    </div>
  );
};

export default experience;
