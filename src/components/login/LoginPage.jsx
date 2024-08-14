
import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import the custom CSS

const LoginPage = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // For demo purposes, you can add validation here
      setLoggedIn(true);
      navigate('/todos');
    }
  };

  return (
    <Container className="login-container mt-5">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <Form onSubmit={handleLogin} className="login-form">
        <Form.Group controlId="formBasicUsername">
          <Form.Label><b>Username</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;

