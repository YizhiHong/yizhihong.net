import React from "react";
import Classes from "./Experience.css";
import { withTimeParser, withDetailsParser } from "../../../hoc/utils";

const Info = ({ el }) => (
  <div>
    <div className={Classes.title}>
      <h4 className={Classes.name}>{el.name}</h4>
      <h4 className={Classes.date}>
        {withTimeParser(el.startDate)} - {withTimeParser(el.endDate)}
      </h4>
    </div>
    <p>{el.title}</p>
  </div>
);

const experience = ({ data }) => {
  let el = data;
  withDetailsParser(el.details);
  return (
    <div className={Classes.block}>
      <Info el={el} />
    </div>
  );
};

export default experience;
