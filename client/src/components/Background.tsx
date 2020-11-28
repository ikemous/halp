import React from "react";
import { Container } from "react-bootstrap";
import "./background.css";

function Background() {
    return (
        <Container className="background" fluid>
            <div className="dot dotOne" style={{ opacity: "60%"}}></div>
            <div className="dot dotTwo" style={{ opacity: "60%"}}></div>
            <div className="dot dotThree" style={{ opacity: "60%"}}></div>
            <div className="dot dotFour" style={{ opacity: "100%"}}></div>
            <div className="dot dotFive" style={{ opacity: "100%"}}></div>
        </Container>
    );
}

export default Background;