import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        expand="lg"
        className="p-3 fs-5 display-5 fw-bold"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-1" style={{"border": "none"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
