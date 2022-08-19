import polymath_logo from "./images/polymath_logo.jpg";
import "./BootstrapNavbar.css";
import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import MediaQuery from "react-responsive";

function BootstrapNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <MediaQuery query="(max-width: 767px)">
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-around flex-grow-1 pe-3"
              onClick={handleClose}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <a type="button" href="#value">
                aaa
              </a>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#value">Value</Nav.Link>
              <Nav.Link href="#achievements">Achievements</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#social">Social</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </MediaQuery>






      
      <MediaQuery query="(min-width: 768px)">
        <div className="navbar-pc-wrapper py-3">
          <div className="navbar-width px-3 pt-3">
            <div className="navbar-pc navbar-font-size ">
              <div>
                <img src={polymath_logo} className="polymath-logo" />
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#home">
                  Home
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#team">
                  Team
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#value">
                  Value
                </a>
              </div>
              <div>
                <a
                  className="nav-link-decoration navbar-color"
                  href="#achievements"
                >
                  Achievements
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#contact">
                  Contact
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#social">
                  Social
                </a>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default BootstrapNavbar;
