const userService = require('../services/userService');
const user = require('../models').User;

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const emailExists = await user.findOne({ where: { email } });

  if (emailExists) return res.status(409).json({ message: 'User already registered' });

  const userCreate = await userService.createUser(displayName, email, password, image);

  return res.status(201).json(userCreate);
};

const getAllUsersController = async (_req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json(users);
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;

  const userID = await userService.getUserById(id);

  return res.status(200).json(userID);
};

module.exports = {
  createUserController,
  getAllUsersController,
  getUserByIdController,
};