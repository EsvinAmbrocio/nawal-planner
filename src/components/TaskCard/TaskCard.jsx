import { Button,  Card } from 'react-bootstrap';
import { removeTodo } from '../../features/todo/todoSlice';
import { removeGoal } from '../../features/goal/goalSlice';
import { useSelector, useDispatch } from 'react-redux';
import { OPTIONS_VALUES } from '../../features/option/optionSlice';
export function TaskCard({ className, todo={}}) {
  const dispatch = useDispatch();
  const option = useSelector((state) => state.options.value);
  const handleRemove = () => {
    if (option === OPTIONS_VALUES.TASKS) {
      dispatch(removeTodo(todo._id));
    } else if (option ===  OPTIONS_VALUES.GOALS) {
      dispatch(removeGoal(todo._id));
    }
  };
  return (
    <Card className={className}>
      <Card.Body>
        <Card.Text className='text-center' as={'div'}>
          <p>
            <span className='fw-bold d-block'>
              Name:
            </span>
            { todo.name }
          </p>
          <p>
            <span className='fw-bold d-block'>
              Description:
            </span>
            {todo.description}
          </p>
          <p>
            <span className='fw-bold'>
              Due Date:
            </span>
            {todo.dueDate}
          </p>
        </Card.Text>
        <div className='d-grid'>
          <Button onClick={handleRemove} variant="danger">
            Remover
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

