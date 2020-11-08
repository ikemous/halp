import React from "react";
import TicketCreateForm from "../components/TicketCreateForm";
import { Container } from "react-bootstrap";

function TicketCreatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 56px)" }}>
            <TicketCreateForm creatingPage={true} />
        </Container>
    )
}

export default TicketCreatePage;
