import React from "react";
import Classes from "./Experience.css";
import { withTimeParser, withDetailsParser } from "../../../hoc/utils";
import Button from "../../UI/Button/Button";
import Icons from "../../UI/Icons/Icons";
import {
  MdWork,
  MdSchool,
  MdPersonPin,
  MdWeb,
  MdLocationOn,
  MdDateRange,
  MdCode,
  MdFormatListBulleted
} from "react-icons/md";

const Info = props => {
  const el = props.data;
  const icons = getIcons(el.type);
  return (
    <div>
      <div className={Classes.titleBlock}>
        <h4 className={Classes.name}>
          <Icons name={el.type}>{icons.name}</Icons>
          {el.name}
        </h4>
        <h4 className={Classes.location}>
          {el.location}
          <Icons name="location">
            <MdLocationOn />
          </Icons>
        </h4>
      </div>
      <div className={Classes.titleBlock}>
        <h5>
          <Icons size="14px" name="title">
            <MdCode />
          </Icons>
          {el.title}
        </h5>
        <h5 className={Classes.date}>
          {withTimeParser(el.startDate)} - {withTimeParser(el.endDate)}
          <Icons size="14px" name="date">
            <MdDateRange />
          </Icons>
        </h5>
      </div>
      <div className={Classes.details}>{details(el.details, el.type)}</div>
      <div>
        <Icons size="34px" name="projects">
          <MdFormatListBulleted />
        </Icons>
        {el.projects.map(proj => (
          <Button
            key={proj.id}
            clicked={() => props.viewProject(proj.id)}
            className={Classes.Button}
          >
            <Icons fontcolor="white" name="web">
              <MdWeb />
            </Icons>
            {proj.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

const getIcons = type => {
  const icons = {};
  switch (type) {
    case "Education":
      icons.name = <MdSchool />;
      break;
    case "Experience":
      icons.name = <MdWork />;
      break;
    default:
      icons.name = <MdPersonPin />;
  }
  return icons;
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
        <ul>
          <li>GPA: {d.GPA}</li>
          <li>Courses: {courses}</li>
        </ul>
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
