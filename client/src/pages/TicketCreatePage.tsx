import React from "react";
import TicketCreateOrUpdateForm from "../components/TicketCreateOrUpdateForm";
import { Container } from "react-bootstrap";

function TicketCreatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 56px)" }}>
            <TicketCreateOrUpdateForm creatingPage={true} />
        </Container>
    )
}

export default TicketCreatePage;
