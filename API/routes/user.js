const routes = require('express').Router();
 
const createuser=require('../controller/user/CreateUser')
const listuser=require('../controller/user/ListUser')
const updateuser=require('../controller/user/UpdateUser')
const deleteuser=require('../controller/user/DeleteUser')
const listuserbyuserid=require('../controller/user/ListUserByUserId')

routes.post('/create',createuser)
routes.get('/list',listuser)
routes.get('/listbyuserid/:id',listuserbyuserid)
routes.put('/update/:id',updateuser)
routes.delete('/delete/:id',deleteuser)
module.exports = routes;