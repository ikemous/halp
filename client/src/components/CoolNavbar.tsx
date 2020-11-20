import React from "react";
import API from "../utils/API";
import { useDispatch } from "react-redux"
import { logoutUser } from "../utils/actions"
import { RootStateOrAny, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router";
import { Nav, Navbar, Button } from "react-bootstrap";

function CewlNavbar() {
  const location = useLocation();
  const history  = useHistory();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state: RootStateOrAny) => state.user);

  const handleSignout = () => {
    console.log("Signedout");
    localStorage.clear();
    API.signout()
    .then(() => {
      dispatch(logoutUser());
      history.push("/");
    })
    .catch((error) => console.log(error));
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand>HALP</Navbar.Brand>
      <Navbar.Toggle aria-controls="halp-nav" />
      <Navbar.Collapse id="halp-nav" className="justify-content-end">
        <Nav>
          {!loggedIn ? (
            <>
              <Nav.Link
                href="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Nav.Link>
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
                Search
              </Nav.Link>
              <Nav.Link
                href="/create"
                className={
                  location.pathname === "/create" ? "active" : ""
                }
              >
                Create Ticket
              </Nav.Link>
              <Button onClick={handleSignout} variant="danger">Signout</Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CewlNavbar;
