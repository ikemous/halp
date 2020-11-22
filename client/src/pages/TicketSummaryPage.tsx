import React, { useEffect } from "react";
import TicketQueryForm from "../components/TicketQueryFrom";
import TicketSummaryList from "../components/TicketSummaryList";
import { Container } from "react-bootstrap";
import "./ticketSummaryPage.css";

function TicketSummaryPage() {

  return (
    <div style={{ minHeight: "calc(100vh - 56px)" }}>
      <Container >
        <TicketQueryForm />
      </Container>
      
      <Container style={{ marginTop: "5px" }}>
          <TicketSummaryList />
        </Container>
    </div>
  );
}

export default TicketSummaryPage;
