import { useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const Navbars = (props) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary p-3 shadow">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-dark">
            <span className="fw-bold text-danger">JOKE</span> APP
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 focus-ring focus-ring-light"
          >
            <div className="humberger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className="d-flex align-items-center gap-1"
              >
                <i class="bx bxs-user fs-5"></i>
                {sessionStorage.getItem("name")}
              </Nav.Link>
              <Nav.Link className="d-md-none">{props.element}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbars;
