# User and Address Registration API

This project is a simple RESTful API built using **Node.js**, **Express**, and **Sequelize ORM**. The API allows users to register with their name and address, storing the data in a relational database. The **User** table has a one-to-many relationship with the **Address** table, meaning each user can have multiple addresses.

## Features

- **User Registration**: Add a new user with an associated address.
- **Data Persistence**: Store user and address data using SQLite (or another relational database via Sequelize).
- **One-to-Many Relationship**: Each user can have multiple addresses.

## Tech Stack

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for Node.js to create API endpoints.
- **Sequelize ORM**: For database management and handling the one-to-many relationship between User and Address.
- **SQLite3**: Used for storing the data. (Can be replaced with MySQL or PostgreSQL).
- **body-parser**: Middleware to handle incoming JSON requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-address-api.git
   cd user-address-api
2. Install dependencies:
    npm install

3. API Endpoints
Register User and Address
URL: /register
Method: POST
Description: Registers a user with a name and address.
Request Body

4. json

{
  "name": "John Doe",
  "address": "123 Main St"
}
Response
json
Copy code
{
  "message": "User and address registered successfully!",
  "user": {
    "id": 1,
    "name": "John Doe"
  },
  "address": {
    "id": 1,
    "address": "123 Main St",
    "userId": 1
  }
}

5. Project Structure

user-address-api/
├── config/
│   └── config.json         # Database configuration
├── models/
│   ├── address.js          # Address model
│   ├── index.js            # Model initialization and associations
│   └── user.js             # User model
├── node_modules/            # Installed dependencies
├── index.js                # Main server file
├── database.sqlite3        # SQLite database file (generated automatically)
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation 

6. Testing the API
To test the API, you can use Postman or Insomnia to send HTTP requests.

Example Request:
Method: POST
URL: http://localhost:3000/register
Body: (Raw JSON)

{
  "name": "Jane Doe",
  "address": "456 Another St"
}
Example Response:

{
  "message": "User and address registered successfully!",
  "user": {
    "id": 2,
    "name": "Jane Doe"
  },
  "address": {
    "id": 2,
    "address": "456 Another St",
    "userId": 2
  }
}
Database Configuration
The database configuration can be found in config/config.json. By default, it uses SQLite3, but you can switch to another relational database like MySQL or PostgreSQL by modifying the settings.

Example config.json for MySQL:

{
  "development": {
    "username": "root",
    "password": "yourpassword",
    "database": "user_address_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 
 ## License:
 
### Key Sections of the README:

1. **Overview**: Provides a brief description of the project.
2. **Tech Stack**: Lists the technologies used in the project.
3. **Installation**: Step-by-step instructions to set up and run the project.
4. **API Endpoints**: Describes the available API routes and their expected request/response formats.
5. **Project Structure**: Gives a breakdown of the directory structure.
6. **Database Configuration**: Instructions for configuring the database, with an example for MySQL.
7. **License**: Specifies the license for the project (assuming MIT).

This README gives clear instructions on how to set up and use the project, making it easier for others to contribute or test.

