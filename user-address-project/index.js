const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User, Address } = require('./models');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to register user with address
app.post('/register', async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create a new user
    const user = await User.create({ name });

    // Create a new address associated with the user
    const userAddress = await Address.create({ address, userId: user.id });

    // Send success response with the created user and address
    res.status(201).json({
      message: 'User and address registered successfully!',
      user: user,
      address: userAddress
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Error occurred', error: error.message });
  }
});

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
