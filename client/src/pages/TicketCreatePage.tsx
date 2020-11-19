import React from "react";
import TicketCreateForm from "../components/TicketCreateForm";
import { Container, Row } from "react-bootstrap";

function TicketCreatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 56px)" }}>
            <Row
                style={{ height: "calc(100vh - 56px)" }}
                className="align-items-center justify-content-center"
            >
                <TicketCreateForm creatingPage={true} />
            </Row>
        </Container>
    )
}

export default TicketCreatePage;
