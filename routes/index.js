const express = require('express');

const passport = require('passport');

const routes = express.Router();

const apicontroller = require('../controller/apicontroller');

routes.post('/orderStore',apicontroller.orderStore);

routes.get('/viewData',passport.authenticate('jwt',{failureRedirect : false}),apicontroller.viewData);

routes.get('/deleteRecord/:id',apicontroller.deleteRecord);

routes.post('/updateRecord',apicontroller.updateRecord);

routes.post('/TokenGenerat',apicontroller.TokenGenerat);

module.exports = routes;