const express = require('express');
const main = express.Router();
const nisRouter = require('./nis');
const homeRouter = require('./home');

main.use('/', homeRouter);
main.use('/nis',nisRouter);

module.exports = main;