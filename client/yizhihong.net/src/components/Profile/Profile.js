import React, { Component, Fragment } from "react";

import LinkedIn from "../SoicalMedia/LinkedIn";
import Experiences from "../Experiences/Experiences";
import Intro from "./Intro/Intro";

import withLogin from "../../hoc/withLogin";
import { Col } from "react-bootstrap";
import Widget from "../UI/Widget/Widget";

import { informationAPI } from "../../API/informationAPI";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";

class Profile extends Component {
  state = {
    social: false,
    information: null,
    viewProject: false,
    projectID: null
  };

  componentDidMount() {
    let greeding = localStorage.getItem("CUSTOM_GREEDING");

    if (greeding) {
      this.setState({ information: greeding });
    } else {
      informationAPI(this.props.token)
        .then(response => {
          let res = response.data[0].intro;
          this.setState({ information: res });

          localStorage.setItem("CUSTOM_GREEDING", res);
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
    let greeding = localStorage.getItem("CUSTOM_GREEDING");
    return (
      <Fragment>
        <Col xs={12} md={9}>
          <Widget>
            <Intro
              data={this.state.information}
              withEffect={greeding ? false : true}
            />
          </Widget>
          <Experiences
            viewProject={this.setProject}
            closeProejct={this.closeProejct}
          />
        </Col>
        <Col xs={6} md={3}>
          <LinkedIn />
        </Col>
        {this.state.viewProject ? (
          <ProjectDetail
            id={this.state.projectID}
            show={this.state.viewProject}
            modalClosed={this.closeProejct}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default withLogin(Profile);
