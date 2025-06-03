import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';
import { addGoal } from '../../features/goal/goalSlice';
import { OPTIONS_VALUES } from '../../features/option/optionSlice';

export function TaskForm({className}) {
  const inputRefName = useRef()
  const inputRefDescription = useRef()
  const inputRefDueDate = useRef()

  const dispatch = useDispatch()
  const option = useSelector((state) => state.options.value);

  const legendText = option === OPTIONS_VALUES.TASKS ? 'Task' : 'Goal';
  const buttonText = option === OPTIONS_VALUES.TASKS ? 'ADD TASK' : 'ADD GOAL';

  const hadleAddTask = (e) => {
    e.preventDefault();
    const item = {
      name: inputRefName.current.value,
      description: inputRefDescription.current.value,
      dueDate: inputRefDueDate.current.value
    };
    if (option === OPTIONS_VALUES.TASKS) {
      dispatch(addTodo(item));
    } else if (option === OPTIONS_VALUES.GOALS) {
      dispatch(addGoal(item));
    }
    inputRefName.current.value = '';
    inputRefDescription.current.value = '';
    inputRefDueDate.current.value = '';
  }
  return (
    <Form className={className} onSubmit={hadleAddTask}>
      <fieldset className='w-100'>
        <legend>{legendText}</legend>
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
          <Button onClick={hadleAddTask}>{buttonText}</Button>
        </div>
      </fieldset>
    </Form>
  );
}
