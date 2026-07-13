let users = [];

function getAllUsers() {
  return users;
}

function addUser(user) {
  users.push(user);
  return user;
}

module.exports = {
  getAllUsers,
  addUser,
};
