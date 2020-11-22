import React from "react";
import TicketUpdateForm from "../components/TicketUpdateForm";
import { Container, Row } from "react-bootstrap";

function TicketUpdatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 56px)" }}>
            <Row
                style={{ minHeight: "calc(100vh - 56px)" }}
                className="align-items-center justify-content-center"
            >
                <TicketUpdateForm />
            </Row>
        </Container>
    )
}

export default TicketUpdatePage;