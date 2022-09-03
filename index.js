const express = require('express');
const app = express();
const PORT = 2000;
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');
const userRoutes = require('./routes/users');
const session = require('express-session');

app.use(session({
  secret: 'hidden',
  resave: false,
  saveUninitialized: true
}))

const VIEWS_PATH = path.join(__dirname, '/views');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', authenticate, userRoutes);

// Registering a static resource
app.use('/css', express.static('css'));

// Mustache for templating pages
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('view engine', 'mustache');
app.set('views', VIEWS_PATH);

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});
