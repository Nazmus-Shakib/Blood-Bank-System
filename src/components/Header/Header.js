import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="mb-5">
      <Navbar fixed="top" className="nav" bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img
            style={{ height: "60px", width: "110px", marginLeft: "30px" }}
            src={Logo}
            alt=""
          />
        </Navbar.Brand>
        <Nav className="ml-auto mr-4">
          <Nav.Link className="navs" href="">
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link className="navs" href="">
            <Link to="/donateBlood">Donate Blood</Link>
          </Nav.Link>
          <Nav.Link className="navs" href="">
            <Link to="/allDetails">View Donors</Link>
          </Nav.Link>
          <Nav.Link className="navs" href="">
            Admin
          </Nav.Link>
          <Nav.Link className="navs" href="">
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
