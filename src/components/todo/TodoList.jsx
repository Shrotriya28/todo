
import React, { useState } from 'react';
import { Button, Form, Container, ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';
import './todo.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container className="todo-container mt-5">
      <div className="todo-header">
        <h1>Todo List</h1>
      </div>
      <Form onSubmit={addTodo} className="todo-form mb-3">
        <Form.Group className="flex-grow-1">
          <Form.Control
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Todo
        </Button>
      </Form>
      <ListGroup>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} text={todo} removeTodo={removeTodo} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoList;
