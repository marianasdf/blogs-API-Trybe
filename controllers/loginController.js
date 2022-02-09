const loginService = require('../services/loginService');

const createLoginTokenController = async (req, res) => {
  const { email } = req.body;

  const token = await loginService.createLoginToken(email);

  if (token.message) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json(token);
};

module.exports = {
  createLoginTokenController,
};