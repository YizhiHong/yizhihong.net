import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Projects from "../components/Projects/Projects";

const ProjectPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          <Projects />
        </Col>
        <Col xs={12} md={3} />
      </Row>
    </Container>
  );
};

export default ProjectPage;
