const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post('/api/createUser', (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = { firstName, lastName, email };
  users.push(newUser);
  res.json({ success: true, message: 'User created successfully' });
});

app.post('/api/login', (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  if (user) {
    res.json({ success: true, user });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
