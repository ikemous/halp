import React from "react";
import "./coolNavbar.css";
import API from "../utils/API";
import logo from "../utils/images/logo.png"
import { useDispatch } from "react-redux"
import { logoutUser } from "../utils/actions"
import { RootStateOrAny, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router";
import { Nav, Navbar, Button, Image } from "react-bootstrap";


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
    })
    .catch((error) => console.log(error));
    history.push("/");
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand href="/">
        <Image 
          src={logo} 
          alt="halp logo"
          style={{ maxHeight: "60px" }}
        />
      </Navbar.Brand>
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
                href="/search"
                className={
                  location.pathname === "/search" ? "active" : ""
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
                Create
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
