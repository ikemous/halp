import React, { useEffect } from "react";
import TicketQueryForm from "../components/TicketQueryFrom";
import TicketSummaryList from "../components/TicketSummaryList";
import { Container } from "react-bootstrap";
import { RootStateOrAny, useSelector } from "react-redux";

function TicketSummaryPage() {

  return (
    <Container style={{ minHeight: "calc(100vh - 56px)" }}>
      <TicketQueryForm />
      <Container>
        <TicketSummaryList />
      </Container>
    </Container>
  );
}

export default TicketSummaryPage;
