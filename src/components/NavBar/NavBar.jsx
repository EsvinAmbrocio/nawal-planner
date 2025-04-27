import { Container, Navbar, Nav } from 'react-bootstrap';
import reactLogo from '.././../assets/react.svg';
export function NavBar() {
  return (
    <Navbar bg="light" expand="md" fixed='top' >
      <Container>
        <Navbar.Brand href="#home">
          <img src={reactLogo} className="d-inline-block align-top" alt="Vite logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#tasks">Tasks</Nav.Link>
            <Nav.Link href="#goals">Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
