import React from "react";
import { Helmet } from "react-helmet";
import TicketUpdateForm from "../components/TicketUpdateForm";
import { Container, Row } from "react-bootstrap";

function TicketUpdatePage() {
    return (
        <Container style={{ minHeight: "calc(100vh - 86px)" }}>
            <Helmet>
                <meta name="description" content="page with the purpose of updating the ticket being queried" />
                <title>HALP | Update</title>
            </Helmet>
            <Row
                style={{ minHeight: "calc(100vh - 86px)" }}
                className="align-items-center justify-content-center"
            >
                <TicketUpdateForm />
            </Row>
        </Container>
    )
}

export default TicketUpdatePage;