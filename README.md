# User Management API

This project is a simple RESTful API built with Node.js and Express.js for managing user data. It supports basic CRUD operations such as creating, reading, updating, and deleting user records.

## Features

- Create new users with a unique ID
- Fetch all users in the database
- Get details of a specific user by their ID
- Update user details like username and age
- Delete a user by their ID

## Endpoints

| HTTP Method | Endpoint       | Description                    |
|-------------|----------------|--------------------------------|
| `GET`       | `/`            | Fetch all users               |
| `POST`      | `/`            | Add a new user                |
| `GET`       | `/:id`         | Fetch a user by ID            |
| `PATCH`     | `/:id`         | Update user details by ID     |
| `DELETE`    | `/:id`         | Delete a user by ID           |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MahinAhmedKhan/user-management-api.git

