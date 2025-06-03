import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.scss'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { NavBar } from './components/NavBar/NavBar';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskCard } from './components/TaskCard/TaskCard';
import { useSelector } from 'react-redux';
import { useFetchByOption } from './hooks/useFetchByOption';
import { OPTIONS_VALUES } from './features/option/optionSlice';
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loading, error, option } = useFetchByOption();
  const todos = useSelector((state) => state.todos.value);
  const goals = useSelector((state) => state.goals.value);
  const items = option === OPTIONS_VALUES.TASKS ? todos : goals;
  const buttonText = option === OPTIONS_VALUES.TASKS ? 'ADD TASK' : 'ADD GOAL';
  return (
    <>
      <NavBar />
      <Container  className='container-spacing'>
        <Row>
          <Col sm={12} md={6}>
            <Button className='d-md-none mt-3' onClick={handleShow}>
              {buttonText}
            </Button>
            <TaskForm  className="d-md-flex align-items-center h-100 d-none"/>
          </Col>
          <Col sm={12} md={6}>
            <div  data-bs-spy="scroll" data-bs-smooth-scroll="true" className="my-3 scrolling-list-tasks" tabIndex="0">
              {loading && <div>Cargando...</div>}
              {error && <div>Error: {error.message}</div>}
              {!loading && !error && (
                items.map((item) => (
                  <TaskCard key={item._id} className='mb-3' todo={item} />
                ))
              )}
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
