const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const COOKIE_SECRET ="a55b66c77d88e99ff";
const app = express();
const routes = require('./routes/main.js');
const PORT=8082;

var i18n = require("i18n");
i18n.configure({
  locales:['en', 'es', 'ru'],
  queryParameter: 'lang',
  defaultLocale: 'en',
  updateFiles: false,
  syncFiles: false,
  cookie: 'i18n',
  directory: __dirname + '/locales'
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_SECRET));
app.use(session({ 
      secret: COOKIE_SECRET, 
      resave:true,  
      saveUninitialized:true, 
      cookie: { maxAge: 60000 }
      }));

app.use(i18n.init);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(PORT);
console.log('App started in port ' + PORT);

module.exports = app;
