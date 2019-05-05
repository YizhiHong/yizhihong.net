import React from "react";
import Experience from "./Experience/Experience";
import Widget from "../UI/Widget/Widget";
import Classes from "./Experiences.css";
import { withDateSorter } from "../../hoc/utils";

const experiences = ({ exp }) => {
  const displayProjects = () => {
    withDateSorter(exp);
    return exp.map(el => (
      <Widget key={el.id}>
        <Experience data={el} />
      </Widget>
    ));
  };
  return <ul className={Classes.experienceList}>{displayProjects()}</ul>;
};

export default experiences;
