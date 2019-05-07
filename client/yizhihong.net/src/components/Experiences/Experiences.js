import React from "react";
import Experience from "./Experience/Experience";
import { graphql } from "react-apollo";
import { allExperiencesQuery } from "../../API/experienceAPI";

import Widget from "../UI/Widget/Widget";
import Classes from "./Experiences.css";
import { withDateSorter } from "../../hoc/utils";
import Skeleton from "react-loading-skeleton";

const experiences = props => {
  let data = props.data;
  const displayProjects = () => {
    if (data.loading) {
      return (
        <Widget>
          <Skeleton count={8} />
        </Widget>
      );
    } else {
      let exp = data.allExperiences;
      withDateSorter(exp);
      return exp.map(el => (
        <Widget key={el.id}>
          <Experience data={el} viewProject={props.viewProject} />
        </Widget>
      ));
    }
  };
  return <ul className={Classes.experienceList}>{displayProjects()}</ul>;
};

export default graphql(allExperiencesQuery)(experiences);
