const displayNameValidate = (req, res, next) => {
  console.log(req.body);
  const { displayName } = req.body;

  const CHARACTERS = 8;

  if (displayName.length < CHARACTERS || !displayName) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;

  const CHARACTERS = 6;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length < CHARACTERS) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = {
  displayNameValidate,
  emailValidate,
  passwordValidate,
};