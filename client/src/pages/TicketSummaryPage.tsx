import React from "react";
import TicketQueryForm from "../components/TicketQueryFrom";
import TicketSummaryList from "../components/TicketSummaryList";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import "./ticketSummaryPage.css";
import TicketPagination from "../components/TicketPagination";

function TicketSummaryPage() {

  return (
    <Container style={{ minHeight: "calc(100vh - 86px)" }} fluid>
        <Helmet>
          <meta name="description" content="page to display all queried tickets" />
          <title>HALP | Search</title>
        </Helmet>
        <TicketQueryForm />
        <TicketSummaryList />
        <TicketPagination />
    </Container>
  );
}

export default TicketSummaryPage;
