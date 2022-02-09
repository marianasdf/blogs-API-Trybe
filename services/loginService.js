const jwt = require('jsonwebtoken');
const user = require('../models').User;
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

const createLoginToken = async (email) => {
  const emailValidate = await user.findOne({ where: { email } });
  if (!emailValidate) return { message: 'The "email" not to be empty' };
  const token = jwt.sign({ data: email }, secret, jwtConfig);
  return token;
};

/* consultei o PR da Juliana Braga para realizar a função createLoginToken
link: https://github.com/tryber/sd-014-b-project-blogs-api/pull/19/commits/b0cca5f53dc05535160c4cb265d05f928dcdc69e */
module.exports = {
  createLoginToken,
};