import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";
import ScriptLoader from "../../hoc/ScriptLoader"

const scripts = [
  {
    type: "javascript",
    url: "https://www.google.com/recaptcha/api.js"
  }
]

const contact = props => {
  return (
    <Container>
      <Row>
        <ContactForm />
      </Row>
    </Container>
  );
};

export default ScriptLoader(contact,scripts);
