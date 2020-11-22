import React from "react";
import { Container } from "react-bootstrap";
import "./background.css";

function Background() {
    return (
        <Container className="background" fluid>
            <div className="dot dotOne"></div>
            <div className="dot dotTwo"></div>
            <div className="dot dotThree"></div>
            <div className="dot dotFour"></div>
            <div className="dot dotFive"></div>
        </Container>
    );
}

export default Background;