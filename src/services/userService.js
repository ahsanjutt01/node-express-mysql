// services/userService.js
const User = require("../models/User");

const createUser = async (username, email) => {
  const user = await User.create({ username, email });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const updateUser = async (id, username, email) => {
  const user = await User.findByPk(id);
  if (user) {
    user.username = username;
    user.email = email;
    await user.save();
    return user;
  }
  return null;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
