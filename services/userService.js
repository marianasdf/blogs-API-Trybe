const jwt = require('jsonwebtoken');
const user = require('../models').User;
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const createUser = async (displayName, email, password, image) => {
  await user.create({ displayName, email, password, image });
  
  const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, SECRET, jwtConfig);

  return token;
};

module.exports = {
  createUser,
};