// src/pages/CreateUserPage.js
import React from 'react';
import CreateUser from '../components/CreateUser';

const CreateUserPage = ({ createUser }) => {
  return (
    <div>
      <h2>Create User</h2>
      <CreateUser createUser={createUser} />
    </div>
  );
};

export default CreateUserPage;
