// src/components/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUserPage from '../pages/CreateUserPage';
import LoginPage from '../pages/LoginPage';

const AppRouter = ({ createUser, login }) => {
  return (
    <Router>
      <Routes>
        <Route path="/create-user" element={<CreateUserPage createUser={createUser} />} />
        <Route path="/login" element={<LoginPage login={login} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
