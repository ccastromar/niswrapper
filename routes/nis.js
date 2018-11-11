var express = require('express');
var nisRouter = express.Router();
var nisWrap = require('../services/nisWrapper');

nisRouter.get('/chain/height', nisWrap.chainHeight);
nisRouter.post('/block/at/public', nisWrap.blockAt);
nisRouter.get('/namespace/root/page', nisWrap.namespaceRootPage);
nisRouter.get('/namespace/mosaic/definition/page', nisWrap.namespaceMosaicDefinitionPage);
nisRouter.get('/account/get', nisWrap.accountGet);

module.exports = nisRouter;