
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './todo.css'; // Ensure the CSS is imported for consistent styling

const TodoItem = ({ text, index, removeTodo }) => {
  return (
    <ListGroup.Item className="list-group-item">
      {text}
      <Button
        variant="danger"
        size="sm"
        onClick={() => removeTodo(index)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
