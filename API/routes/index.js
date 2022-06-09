
const { route } = require('./user');
const routes = require('express').Router()

user = require('./user'),

routes.use('/user', user);



module.exports = routes;
