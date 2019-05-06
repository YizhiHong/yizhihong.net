import React, { Component } from "react";
import { graphql } from "react-apollo";
import Project from "./Project/Project";

import Classes from "./Projects.css";
import { allProjectsQuery } from "../../API/projectAPI";
import { withDateSorter } from "../../hoc/utils";
import Skeleton from "react-loading-skeleton";
import Widget from "../UI/Widget/Widget";

class Projects extends Component {
  displayProjects() {
    if (this.props.data.loading) {
      return (
        <Widget>
          <Skeleton count={15} />
        </Widget>
      );
    } else {
      withDateSorter(this.props.data.allProjects);
      return this.props.data.allProjects.map(project => (
        <Widget key={project.id}>
          <Project proj={project} />
        </Widget>
      ));
    }
  }

  render() {
    return <ul className={Classes.projectList}>{this.displayProjects()}</ul>;
  }
}

export default graphql(allProjectsQuery)(Projects);
