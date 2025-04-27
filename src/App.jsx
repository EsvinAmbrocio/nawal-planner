import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.scss'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { NavBar } from './components/NavBar/NavBar';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskCard } from './components/TaskCard/TaskCard';
function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <Container  className='container-spacing'>
        <Row>
          <Col sm={12} md={6}>
            <Button className='d-md-none mt-3' onClick={handleShow}>
              ADD GOAL
            </Button>
            <TaskForm  className="d-md-flex align-items-center h-100 d-none"/>
          </Col>
          <Col sm={12} md={6}>
            <div  data-bs-spy="scroll" data-bs-smooth-scroll="true" className="my-3 scrolling-list-tasks" tabIndex="0">
              <TaskCard className='mb-3'></TaskCard>
              <TaskCard className='mb-3'></TaskCard>
              <TaskCard className='mb-3'></TaskCard>
              <TaskCard className='mb-3'></TaskCard>
              <TaskCard className='mb-3'></TaskCard>
              <TaskCard className='mb-3'></TaskCard>
              <TaskCard className='mb-3'></TaskCard>
              <TaskCard className='mb-3'></TaskCard>
            </div>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} className='modal-task' aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Body>
            <TaskForm className='w-100'/>
          </Modal.Body>
        </ Modal >
      </Container>
    </>
  )
}

export default App
