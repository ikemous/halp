import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Nav, Navbar } from "react-bootstrap";

function CewlNavbar() {
  const location = useLocation();
  const { loggedIn } = useSelector((state: RootStateOrAny) => state.user);

  return (
    <Navbar expand="md">
      <Navbar.Brand>HALP</Navbar.Brand>
      <Navbar.Toggle aria-controls="halp-nav" />
      <Navbar.Collapse id="halp-nav" className="justify-content-end">
        <Nav>
          <Nav.Link
            href="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Nav.Link>
          {!loggedIn ? (
            <>
              <Nav.Link
                href="/login"
                className={location.pathname === "/login" ? "active" : ""}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="/signup"
                className={location.pathname === "/signup" ? "active" : ""}
              >
                Signup
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                href="/ticket-summary"
                className={
                  location.pathname === "/ticket-summary" ? "active" : ""
                }
              >
                Ticket Summary
              </Nav.Link>
              <Nav.Link
                href="/create"
                className={
                  location.pathname === "/create" ? "active" : ""
                }
              >
                Ticket Create
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CewlNavbar;
