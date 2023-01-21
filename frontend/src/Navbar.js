import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Microblog</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new">
              <Nav.Link>Add new post</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
