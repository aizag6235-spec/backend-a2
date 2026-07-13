const repository = require("../repositories/postgresRepository");

async function getUsers() {
  return await repository.getAllUsers();
}

async function createUser(name) {
  const user = {
    name: name,
  };

  return await repository.addUser(user);
}

module.exports = {
  getUsers,
  createUser,
};
