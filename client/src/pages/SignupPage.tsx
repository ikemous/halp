import React from "react";
import { Helmet } from "react-helmet";
import DecentUserAuthForm from "../components/DecentUserAuthForm";
import { Container, Row } from "react-bootstrap";

function SignupPage() {
  return (
    <Container style={{ minHeight: "calc(100vh - 86px)" }}>
      <Helmet>
          <meta name="description" content="Page to signup the user" />
          <title>HALP | Signup</title>
      </Helmet>
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
