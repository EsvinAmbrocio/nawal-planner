import { Button,  Card } from 'react-bootstrap';
import { removeTodo } from '../../features/todo/todoSlice';
import { useDispatch } from 'react-redux';
export function TaskCard({ className, todo={}}) {
  const dispatch = useDispatch()
  const handleRemoveTask = () => {
    dispatch(removeTodo(todo.id))
  }
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
          <Button onClick={handleRemoveTask} variant="danger">
            Remover
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

