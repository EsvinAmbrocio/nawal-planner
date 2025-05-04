import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';

export function TaskForm({className}) {
  const inputRefName = useRef()
  const inputRefDescription = useRef()
  const inputRefDueDate = useRef()

  const dispatch = useDispatch()

  const hadleAddTask = (e) => {
    e.preventDefault()
    const task = {
      id: Date.now(),
      name: inputRefName.current.value,
      description: inputRefDescription.current.value,
      dueDate: inputRefDueDate.current.value
    }
    dispatch(addTodo(task))
    inputRefName.current.value = ''
    inputRefDescription.current.value = ''
    inputRefDueDate.current.value = ''
  }
  return (
    <Form className={className} onSubmit={hadleAddTask}>
      <fieldset className='w-100'>
        <legend>Task</legend>
        <Form.Group className="mb-3" controlId="formTaskName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter task name"  ref={inputRefName}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTaskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter task description" ref={inputRefDescription} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTaskDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" placeholder="Enter task due date" ref={inputRefDueDate} />
        </Form.Group>
        <div className='d-flex justify-content-center'>
          <Button onClick={hadleAddTask}>ADD GOAL</Button>
        </div>
      </fieldset>
    </Form>
  );
}
