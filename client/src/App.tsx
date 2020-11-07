import React from "react";
import CoolNavbar from "./components/CoolNavbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TicketCreatePage from "./pages/TicketCreatePage";
import TicketSummaryPage from "./pages/TicketSummaryPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <CoolNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <ProtectedRoute
          exact
          path="/ticket-summary"
          ItemToRender={TicketSummaryPage}
        />
        <ProtectedRoute
          exact
          path="/ticket-create"
          ItemToRender={TicketCreatePage}
        />
      </Switch>
    </Router>
  );
}

export default App;
