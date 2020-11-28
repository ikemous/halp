import React from "react";
import { Helmet } from "react-helmet";
import DecentUserAuthForm from "../components/DecentUserAuthForm";
import { Container, Row } from "react-bootstrap";

function LoginPage() {
  return (
    <Container style={{ minHeight: "calc(100vh - 86px)" }}>
      <Helmet>
        <meta name="description" content="page with a form to login the user" />
        <title>HALP | Login</title>
      </Helmet>
      <Row
        style={{ height: "calc(100vh - 86px)" }}
        className="align-items-center justify-content-center"
      >
          <DecentUserAuthForm loginPage={true} />
      </Row>
    </Container>
  );
}

export default LoginPage;
