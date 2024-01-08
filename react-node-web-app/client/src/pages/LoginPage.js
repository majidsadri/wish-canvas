// src/pages/LoginPage.js
import React from 'react';
import Login from '../components/Login';

const LoginPage = ({ login }) => {
  return (
    <div>
      <h2>Login</h2>
      <Login login={login} />
    </div>
  );
};

export default LoginPage;
