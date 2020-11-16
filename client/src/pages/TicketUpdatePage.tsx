import React from "react";
import TicketUpdateForm from "../components/TicketUpdateForm";
import { Container } from "react-bootstrap";

function TicketUpdatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 56px)" }}>
            <h1>Test</h1>
            <TicketUpdateForm />
        </Container>
    )
}

export default TicketUpdatePage;