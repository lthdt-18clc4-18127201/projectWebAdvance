// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample({ user }) {
   const logout = () => {
    window.open("http://localhost:5001/auth/logout", "_self");
  };
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
          {user ? (
            <Nav className="ms-auto">
              <Nav.Link href="/profile">{user.displayName}</Nav.Link>
              <Nav.Link onClick={logout}>Log out</Nav.Link>
            </Nav>
           
          ) : (
            <Nav className="ms-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signin">Sign in</Nav.Link>
            </Nav>
          )}
      </Container>
    </Navbar>
  );
}

export default BasicExample;
