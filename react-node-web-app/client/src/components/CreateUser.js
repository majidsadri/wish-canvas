// src/components/CreateUser.js
import React, { useState } from 'react';

const CreateUser = ({ createUser }) => {
  console.log('createUser in CreateUser:', createUser); // Add this line
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = () => {
    console.log('createUser in handleCreateUser:', createUser); // Add this line
    createUser({ firstName, lastName, email, password });
    // Reset form after submitting
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {/* ... rest of the code ... */}
    </div>
  );
};

export default CreateUser;
