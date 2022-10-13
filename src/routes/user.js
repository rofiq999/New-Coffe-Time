const express = require('express');

const usersRouter = express.Router();

const { get, create, editPassword } = require('../controller/user');

usersRouter.get('/', get);
usersRouter.post('/', create);
usersRouter.patch('/editPassword', editPassword);

module.exports = usersRouter;
