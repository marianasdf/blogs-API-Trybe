require('dotenv').config();

const express = require('express');
const rescue = require('express-rescue');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoryController = require('./controllers/categoryController');
const getAll = require('./controllers/userController');
const { nameValidate } = require('./middlewares/categoryValidate');
const {
  displayNameValidate,
  emailValidate,
  passwordValidate,
  idValidate,
} = require('./middlewares/userValidate');

const { validateToken } = require('./middlewares/auth');

const { loginValidate } = require('./middlewares/loginValidate');

const app = express();
app.use(express.json());

app.post(
  '/user',
  displayNameValidate,
  emailValidate,
  passwordValidate,
  rescue(userController.createUserController),
);

app.post('/login', loginValidate, rescue(loginController.createLoginTokenController));

app.get('/user', validateToken, rescue(getAll.getAllUsersController));

app.get('/user/:id', validateToken, idValidate, rescue(userController.getUserByIdController));

app.post('/categories', 
nameValidate, validateToken, rescue(categoryController.createCategoryController));

app.get('/categories', validateToken, rescue(categoryController.getAllCategoriesController));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
