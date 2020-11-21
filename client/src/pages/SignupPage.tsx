import React from "react";
import DecentUserAuthForm from "../components/DecentUserAuthForm";
import { Container, Row } from "react-bootstrap";

function SignupPage() {
  return (
    <Container style={{ minHeight: "calc(100vh - 56px)" }}>
      <Row
        style={{ height: "calc(100vh - 56px)" }}
        className="align-items-center justify-content-center"
      >
        <DecentUserAuthForm loginPage={false} />
      </Row>
    </Container>
  );
}

export default SignupPage;
