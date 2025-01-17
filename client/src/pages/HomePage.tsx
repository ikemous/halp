import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row } from "react-bootstrap";
import "./homePage.css";

function HomePage() {
  return (
    <Container style={{ minHeight: "calc(100vh - 86px)" }}>
      <Helmet>
        <meta name="description" content="Landing Page of the halp website" />
        <title>HALP | Create</title>
      </Helmet>
      <Row
        style={{ height: "calc(100vh - 86px)" }}
        className="align-items-center justify-content-center"
      >
        <div className="text-center">
          <h2 className="slogan">Make Work Work Better</h2>
          <h3 className="site-description">
            Assign, track, manage, and resolve tickets effortlessly
          </h3>
        </div>
      </Row>
    </Container>
  );
}

export default HomePage;
