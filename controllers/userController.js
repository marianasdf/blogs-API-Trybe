const userService = require('../services/userService');
const user = require('../models').User;

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const emailExists = await user.findOne({ where: { email } });

  if (emailExists) return res.status(409).json({ message: 'User already registered' });

  const userCreate = await userService.createUser(displayName, email, password, image);
  
  return res.status(201).json(userCreate);
};

module.exports = {
  createUserController,
};