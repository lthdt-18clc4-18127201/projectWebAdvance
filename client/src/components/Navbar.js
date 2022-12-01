import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar bg="light" color="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">KHoot Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signin">Sign in</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
