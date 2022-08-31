const express = require('express')
const app = express()
const PORT = 2000;
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

app.use(bodyParser.json());

// Mustache for templating pages
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/users', (req, res) => {
  let users = [
    {name: "Alex Cousins", age: 43},
    {name: "Bodd Norts", age: 45},
    {name: "Brocke Seden", age: 23}
  ];

  res.render('users', {users: users});
})

app.get('/', (req, res) => {
  let user = {name: "Jon snow", address: "43 Romford street" };

  res.render('index', user);
})

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
})


// 202210860614HA
