import React from "react";
import { Container, Row } from "react-bootstrap";
import Profile from "../components/Profile/Profile";

const Index = props => {
  return (
    <Container>
      <Row>
        <Profile />
      </Row>
    </Container>
  );
};

export default Index;
