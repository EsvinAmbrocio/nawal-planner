import { Button,  Card } from 'react-bootstrap';

export function TaskCard({ className}) {
  return (
    <Card className={className}>
      <Card.Body>
        <Card.Text className='text-center' as={'div'}>
          <p>
            <span className='fw-bold d-block'>
              Name:
            </span>
            Lorem ipsum dolor
          </p>
          <p>
            <span className='fw-bold d-block'>
              Description:
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          <p>
            <span className='fw-bold'>
              Due Date:
            </span>
            2023-10-10
          </p>
        </Card.Text>
        <div className='d-grid'>
          <Button>
            Remover
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

