const jwt = require('jsonwebtoken');
const user = require('../models').User;
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createUser = async (displayName, email, password, image) => {
  await user.create({ displayName, email, password, image });
  
  const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return token;
};

const getAllUsers = async () => {
  const users = await user.findAll();

  return users;
};

module.exports = {
  createUser,
  getAllUsers,

};