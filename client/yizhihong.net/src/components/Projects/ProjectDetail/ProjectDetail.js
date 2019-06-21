import React, { Component } from "react";

import { Query } from "react-apollo";
import { getProjectQuery } from "../../../API/projectAPI";
import Loader from "../../UI/Loader/Loader";
import Modal from "../../UI/Modal/Modal";
import Project from "../Project/Project";

class ProjectDetail extends Component {
  componentDidMount() {}

  render() {
    const ID = this.props.id;
    return (
      <Query query={getProjectQuery} variables={{ id: ID }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <p>ERROR: {error.message}</p>;
          const project = data.project;
          return (
            <Modal show={this.props.show} modalClosed={this.props.modalClosed}>
              <Project proj={project} />
            </Modal>
          );
        }}
      </Query>
    );
  }
}

export default ProjectDetail;
