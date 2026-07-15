const bcrypt = require("bcrypt");
const repository = require("../repositories/memoryRepository");

async function registerUser(name, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return await repository.createUser(name, hashedPassword);
}

async function loginUser(name, password) {
  const user = await repository.getUserByName(name);

  if (!user) {
    return null;
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return null;
  }

  return user;
}

module.exports = {
  registerUser,
  loginUser,
};
