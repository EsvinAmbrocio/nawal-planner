import { Container, Navbar, Nav } from 'react-bootstrap';
import reactLogo from '.././../assets/react.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setOption, OPTIONS_VALUES } from '../../features/option/optionSlice'

export function NavBar() {
  const option = useSelector((state) => state.options.value);
  const dispatch = useDispatch();

    const optionHandler = (e, menuKey) => {
      e.preventDefault();
      dispatch(setOption(menuKey));
    }
  return (
    <Navbar bg="light" expand="md" fixed='top' >
      <Container>
        <Navbar.Brand href="#home">
          <img src={reactLogo} className="d-inline-block align-top" alt="Vite logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#tasks" eventKey='tasks'  onClick={ (e) => optionHandler(e, OPTIONS_VALUES.TASKS)}>Tasks</Nav.Link>
            <Nav.Link href="#goals" eventKey='goals' onClick={(e) => optionHandler(e, OPTIONS_VALUES.GOALS)}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
