import React, { Component } from "react";
import { graphql } from "react-apollo";
import Project from "./Project/Project";

import Classes from "./Projects.css";
import { allProjectsQuery } from "../../API/projectAPI";
import Loader from "../UI/Loader/Loader";
import { withDateSorter } from "../../hoc/utils";

class Projects extends Component {
  displayProjects() {
    if (this.props.data.loading) {
      return <Loader size="5px" />;
    } else {
      withDateSorter(this.props.data.allProjects);
      return this.props.data.allProjects.map(project => (
        <Project key={project.id} proj={project} />
      ));
    }
  }

  render() {
    return <ul className={Classes.projectList}>{this.displayProjects()}</ul>;
  }
}

export default graphql(allProjectsQuery)(Projects);
