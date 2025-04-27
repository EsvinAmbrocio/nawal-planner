import { Button, Form } from 'react-bootstrap';

export function TaskForm({className}) {
  return (
    <Form className={className}>
      <fieldset className='w-100'>
        <legend>Task</legend>
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
  );
}
