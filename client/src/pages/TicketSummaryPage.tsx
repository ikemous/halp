import React from "react";
import TicketQueryForm from "../components/TicketQueryFrom";
import TicketSummaryList from "../components/TicketSummaryList";
import { Container } from "react-bootstrap";
import "./ticketSummaryPage.css";
import TicketPagination from "../components/TicketPagination";

function TicketSummaryPage() {

  return (
    <Container style={{ minHeight: "calc(100vh - 86px)" }} fluid>
        <TicketQueryForm />
        <TicketSummaryList />
        <TicketPagination />
    </Container>
  );
}

export default TicketSummaryPage;
