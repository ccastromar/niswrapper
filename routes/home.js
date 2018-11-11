var express = require('express');
var homeRouter = express.Router();
var homeCtl = require('../controllers/homeCtl')

homeRouter.get('/', homeCtl.getIndex);

module.exports = homeRouter;