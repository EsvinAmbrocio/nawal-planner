import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Button, Form, Container, Row, Col, Card, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <Container  className='container-spacing'>
        <Row>
          <Col sm={12} md={6}>
            <Button className='d-md-none mt-3'>
              ADD GOAL
            </Button>
            <Form className='d-md-flex align-items-center h-100 d-none'>
              <fieldset className='w-100'>
                <legend>Tak</legend>
                <Form.Group className="mb-3" controlId="formTaskName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter task name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTaskDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter task description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTaskDueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter task due date" />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                  <Button>ADD GOAL</Button>
                </div>
              </fieldset>
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <div  data-bs-spy="scroll" data-bs-smooth-scroll="true" className="my-3 scrolling-list-tasks" tabindex="0">
              <Card>
                <Card.Body>
                  <Card.Text className='text-center'>
                    <p>
                      <span className='fw-bold d-block'>
                        Name:
                      </span>
                      Lorem ipsum dolor
                    </p>
                    <p>
                      <span className="fw-bold d-block">
                        Description:
                      </span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus facilis asperiores nesciunt voluptate repellendus tenetur maiores quaerat libero? Sint sunt saepe eaque corrupti suscipit obcaecati libero expedita ut eum! Quibusdam.
                    </p>
                    <p>
                      <span className="fw-bold">
                        Due Date:
                      </span>
                      31/12/2023
                    </p>
                  </Card.Text>
                  <div className='d-grid'>
                    <Button>
                      Remover
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Text className='text-center'>
                    <p>
                      <span className='fw-bold d-block'>
                        Name:
                      </span>
                      Lorem ipsum dolor
                    </p>
                    <p>
                      <span className="fw-bold d-block">
                        Description:
                      </span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus facilis asperiores nesciunt voluptate repellendus tenetur maiores quaerat libero? Sint sunt saepe eaque corrupti suscipit obcaecati libero expedita ut eum! Quibusdam.
                    </p>
                    <p>
                      <span className="fw-bold">
                        Due Date:
                      </span>
                      31/12/2023
                    </p>
                  </Card.Text>
                  <div className='d-grid'>
                    <Button>
                      Remover
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Text className='text-center'>
                    <p>
                      <span className='fw-bold d-block'>
                        Name:
                      </span>
                      Lorem ipsum dolor
                    </p>
                    <p>
                      <span className="fw-bold d-block">
                        Description:
                      </span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus facilis asperiores nesciunt voluptate repellendus tenetur maiores quaerat libero? Sint sunt saepe eaque corrupti suscipit obcaecati libero expedita ut eum! Quibusdam.
                    </p>
                    <p>
                      <span className="fw-bold">
                        Due Date:
                      </span>
                      31/12/2023
                    </p>
                  </Card.Text>
                  <div className='d-grid'>
                    <Button>
                      Remover
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Text className='text-center'>
                    <p>
                      <span className='fw-bold d-block'>
                        Name:
                      </span>
                      Lorem ipsum dolor
                    </p>
                    <p>
                      <span className="fw-bold d-block">
                        Description:
                      </span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus facilis asperiores nesciunt voluptate repellendus tenetur maiores quaerat libero? Sint sunt saepe eaque corrupti suscipit obcaecati libero expedita ut eum! Quibusdam.
                    </p>
                    <p>
                      <span className="fw-bold">
                        Due Date:
                      </span>
                      31/12/2023
                    </p>
                  </Card.Text>
                  <div className='d-grid'>
                    <Button>
                      Remover
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Text className='text-center'>
                    <p>
                      <span className='fw-bold d-block'>
                        Name:
                      </span>
                      Lorem ipsum dolor
                    </p>
                    <p>
                      <span className="fw-bold d-block">
                        Description:
                      </span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus facilis asperiores nesciunt voluptate repellendus tenetur maiores quaerat libero? Sint sunt saepe eaque corrupti suscipit obcaecati libero expedita ut eum! Quibusdam.
                    </p>
                    <p>
                      <span className="fw-bold">
                        Due Date:
                      </span>
                      31/12/2023
                    </p>
                  </Card.Text>
                  <div className='d-grid'>
                    <Button>
                      Remover
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card className='my-2'>
                <Card.Body>
                  <Card.Text className='text-center'>
                    <p>
                      <span className='fw-bold d-block'>
                        Name:
                      </span>
                      Lorem ipsum dolor
                    </p>
                    <p>
                      <span className="fw-bold d-block">
                        Description:
                      </span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus facilis asperiores nesciunt voluptate repellendus tenetur maiores quaerat libero? Sint sunt saepe eaque corrupti suscipit obcaecati libero expedita ut eum! Quibusdam.
                    </p>
                    <p>
                      <span className="fw-bold">
                        Due Date:
                      </span>
                      31/12/2023
                    </p>
                  </Card.Text>
                  <div className='d-grid'>
                    <Button>
                      Remover
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
