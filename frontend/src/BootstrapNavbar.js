import polymath_logo from "./images/polymath_logo.jpg";
import "./BootstrapNavbar.css";
import { useCallback, useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

function BootstrapNavbar() {
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 500;

  const scrollEvent = useCallback(() => {
    const offset = window.scrollY;
    console.log(offset);

    if (offset > headerHeight) {
      setIsHeaderShown(false);
    } else {
      setIsHeaderShown(true);
    }

    if (offset < lastPosition) {
      setIsHeaderShown(true);
    }

    setLastPosition(offset);
  }, [lastPosition]);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollEvent]);

  if (true) {
    return (
      <>
        <Navbar key="md" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={polymath_logo} className="polymath_logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <img src={polymath_logo} className="polymath_logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-around flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#team">Team</Nav.Link>
                  <Nav.Link href="#value">Value</Nav.Link>
                  <Nav.Link href="#achievements">Achievements</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <Nav.Link href="#social">Social</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default BootstrapNavbar;