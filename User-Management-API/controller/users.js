import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).send(`User with ID ${id} not found`);
    } else {
      res.send(user);
    }
  };

  export const deleteUser = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      res.status(404).send(`User with ID ${id} not found`);
    } else {
      users.splice(userIndex, 1);
      res.send(`User with ID ${id} deleted successfully`);
    }
  };

export const updateUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    if (!user) {
      res.status(404).send(`User with ID ${id} not found`);
    } else {
      user.username = req.body.username;
      user.age = req.body.age;
      res.send(`User with ID ${id} updated successfully`);
    }
  };