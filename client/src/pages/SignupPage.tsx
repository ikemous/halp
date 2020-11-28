import React from "react";
import DecentUserAuthForm from "../components/DecentUserAuthForm";
import { Container, Row } from "react-bootstrap";

function SignupPage() {
  return (
    <Container style={{ minHeight: "calc(100vh - 86px)" }}>
      <Row
        style={{ height: "calc(100vh - 86px)" }}
        className="align-items-center justify-content-center"
      >
        <DecentUserAuthForm loginPage={false} />
      </Row>
    </Container>
  );
}

export default SignupPage;
