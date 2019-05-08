import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";

const contact = props => {
  return (
    <Container>
      <Row>
        <ContactForm />
      </Row>
    </Container>
  );
};

export default contact;
