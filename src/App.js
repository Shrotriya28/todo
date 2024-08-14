import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import TodoList from './components/todo/TodoList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/todos" element={loggedIn ? <TodoList /> : <LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path="/" element={loggedIn ? <TodoList /> : <LoginPage setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
