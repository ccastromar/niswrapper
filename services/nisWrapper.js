const request = require('request');
//Testnet node
const url = "http://23.228.67.85:7890/";
//const url = "https://shibuya.supernode.me:7891/";
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

exports.chainHeight = function (req, res) {
  const vUrl = url + 'chain/height';
  doGet(req, res, vUrl).then(function (v) {
    res.json(v);
  }).catch(function (err) {
    console.error(err);
    res.status(500).json({
      "error": "Error"
    });
  });
}

exports.blockAt = function (req, res) {
  const vUrl = url + 'block/at/public';
  let datos = '{"height":' + req.body.datos + '}';
  doPost(req, res, vUrl, datos).then(function (v) {
    res.json(v);
  }).catch(function (err) {
    console.error(err);
    res.status(500).json({
      "error": "Error"
    });
  });
}

exports.namespaceRootPage = function (req, res) {
  const vUrl = url + 'namespace/root/page';
  doGet(req, res, vUrl).then(function (v) {
    res.json(v);
  }).catch(function (err) {
    console.error(err);
    res.status(500).json({
      "error": "Error"
    });
  });
}

exports.namespaceMosaicDefinitionPage = function (req, res) {
  let m = req.query.namespace;
  let vUrl = url + 'namespace/mosaic/definition/page?namespace=' + m;
  doGet(req, res, vUrl).then(function (v) {
    res.json(v);
  }).catch(function (err) {
    console.error(err);
    res.status(500).json({
      "error": "Error"
    });
  });
}

exports.accountGet = function (req, res) {
  let m = req.query.address;
  let vUrl = url + 'account/get?address=' + m;
  doGet(req, res, vUrl).then(function (v) {
    res.json(v);
  }).catch(function (err) {
    console.error(err);
    res.status(500).json({
      "error": "Error"
    });
  });
}

function doGet(req, res, url) {

  return new Promise(function (resolve, reject) {

    request.get({
      url: url,
      headers: headers
    }, function (err, res) {
      if (res) {
        //console.error(res['body']);
        let j = JSON.parse(res['body']);
        resolve(j);
      } else {
        console.error(err);
        reject(false);
      }
    });
  });
}

function doPost(req, res, url, postData) {

  return new Promise(function (resolve, reject) {
    postData = JSON.parse(postData);
    request.post({
      url: url,
      "json": true,
      body: postData,
      headers: headers
    }, function (err, res) {
      if (res) {
        //console.error(res['body']);
        let j = (res['body']);
        resolve(j);
      } else {
        console.error(err);
        reject(false);
      }
    });
  });
}