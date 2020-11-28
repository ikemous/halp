import React from "react";
import { Helmet } from "react-helmet";
import TicketCreateForm from "../components/TicketCreateForm";
import { Container, Row } from "react-bootstrap";

function TicketCreatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 86px)" }}>
            <Helmet>
                <meta name="description" content="page with a form to create a ticket" />
                <title>HALP | Create</title>
            </Helmet>
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
