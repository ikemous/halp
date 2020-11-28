import React from "react";
import TicketCreateForm from "../components/TicketCreateForm";
import { Container, Row } from "react-bootstrap";

function TicketCreatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 86px)" }}>
            <Row
                style={{ minHeight: "calc(100vh - 86px)" }}
                className="align-items-center justify-content-center"
            >
                <TicketCreateForm creatingPage={true} />
            </Row>
        </Container>
    )
}

export default TicketCreatePage;
