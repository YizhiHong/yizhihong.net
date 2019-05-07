import React, { Component, Fragment } from "react";

// import LinkedIn from "../SoicalMedia/LinkedIn";
import Experiences from "../Experiences/Experiences";
import Intro from "./Intro/Intro";

import { Col } from "react-bootstrap";
import Widget from "../UI/Widget/Widget";

// import withLogin from '../../hoc/withLogin'
import { TOKEN, HOST } from "../../config/config";
import axios from "axios";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";

class Profile extends Component {
  state = {
    social: false,
    information: null,
    viewProject: false,
    projectID: null
  };

  componentDidMount() {
    if (TOKEN) {
      axios
        .get(`${HOST}introductions`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        })
        .then(response => {
          this.setState({ information: response.data[0].intro });
        })
        .catch(error => {
          // Handle error.
          console.log("An error occurred:", error);
        });
    }
  }

  setProject = id => {
    this.setState({ viewProject: true, projectID: id });
  };

  closeProejct = () => {
    this.setState({
      viewProject: false,
      projectID: null
    });
  };

  render() {
    return (
      <Fragment>
        <Col xs={12} md={9}>
          <Widget>
            <Intro data={this.state.information} />
          </Widget>
          <Experiences
            viewProject={this.setProject}
            closeProejct={this.closeProejct}
          />
        </Col>
        <Col xs={6} md={3}>
          {/* <LinkedIn /> */}
        </Col>
        {this.state.viewProject ? (
          <ProjectDetail
            id={this.state.projectID}
            show = {this.state.viewProject}
            modalClosed={this.closeProejct}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default Profile;
