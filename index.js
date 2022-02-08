const express = require('express');
const rescue = require('express-rescue');
const userController = require('./controllers/userController');
const {
  displayNameValidate, 
  emailValidate, 
  passwordValidate, 
} = require('./middlewares/userValidate');

const app = express();
app.use(express.json());

app.post(
  '/user', 
  displayNameValidate, 
  emailValidate, 
  passwordValidate, 
  rescue(userController.createUserController),
);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
