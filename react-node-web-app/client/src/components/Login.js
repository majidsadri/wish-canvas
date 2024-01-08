// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    login({ email });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
