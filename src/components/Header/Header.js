import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="mb-5">
      <Navbar fixed="top" className="nav" bg="danger">
        <Navbar.Brand href="/home">
          <img
            style={{ height: "60px", width: "110px", marginLeft: "30px" }}
            src={Logo}
            alt=""
          />
        </Navbar.Brand>
        <Nav className="ml-auto mr-4">
          <Nav.Link className="navs" href="">
            <Link
              style={{
                color: "white",
                fontSize: "22px",
                textDecoration: "none",
              }}
              to="/home"
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="navs" href="">
            <Link
              style={{
                color: "white",
                fontSize: "22px",
                textDecoration: "none",
              }}
              to="/donateBlood"
            >
              Donate Blood
            </Link>
          </Nav.Link>
          <Nav.Link className="navs" href="">
            <Link
              style={{
                color: "white",
                fontSize: "22px",
                textDecoration: "none",
              }}
              to="/allDetails"
            >
              View Donors
            </Link>
          </Nav.Link>
          <Nav.Link className="navs" href="">
            <Link
              style={{
                color: "white",
                fontSize: "22px",
                textDecoration: "none",
              }}
              to="/admin"
            >
              Admin
            </Link>
          </Nav.Link>
          <Nav.Link
            className="navs"
            href=""
            onClick={() => window.location.reload()}
            style={{
              color: "white",
              fontSize: "22px",
              textDecoration: "none",
            }}
          >
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
