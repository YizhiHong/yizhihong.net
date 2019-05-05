import React, { Component, Fragment } from "react";

import LinkedIn from "../SoicalMedia/LinkedIn";
import Experiences from "../Experiences/Experiences";
import Intro from "./Intro/Intro";

import Loader from "../UI/Loader/Loader";
import { Col } from "react-bootstrap";
import Widget from "../UI/Widget/Widget";

// import withLogin from '../../hoc/withLogin'
import { TOKEN, HOST } from "../../config/config";
import axios from "axios";
import { graphql } from "react-apollo";
import { allExperiencesQuery } from "../../API/experienceAPI";

class Profile extends Component {
  state = {
    social: false,
    information: null
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

  shouldComponentUpdate() {
    if (this.props.data.loading) return false;
    else return true;
  }

  render() {
    let exp = this.props.data;
    return (
      <Fragment>
        <Col xs={12} md={9}>
          <Widget>
            <Intro data={this.state.information} />
          </Widget>
          {exp.loading ? (
            <Loader size="8px" />
          ) : (
            <Experiences exp={exp.allExperiences} />
          )}
        </Col>
        <Col xs={6} md={3}>
          <LinkedIn />
        </Col>
      </Fragment>
    );
  }
}

export default graphql(allExperiencesQuery)(Profile);
