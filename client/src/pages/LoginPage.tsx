import React from "react";
import DecentUserAuthForm from "../components/DecentUserAuthForm";
import { Container, Row } from "react-bootstrap";

function LoginPage() {
  return (
    <Container style={{ minHeight: "calc(100vh - 56px)" }}>
      <Row
        style={{ height: "calc(100vh - 56px)" }}
        className="align-items-center justify-content-center"
      >
        <div className="text-center">
          <DecentUserAuthForm loginPage={true} />
        </div>
      </Row>
    </Container>
  );
}

export default LoginPage;
