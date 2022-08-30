const express = require('express')
const app = express()
const PORT = 2000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get('/cartoons/:genre/year/:year', (req, res) => {

// using dynamic parameters
//   req.params.genre
//
// // using query sstrings
//   req.query.sort
//   req.query.page

// sending json
 // let cartoons = [
 //   { title: "Power puff girls", year: 2003 },
 //   { title: "Looney toons", year: 2001 },
 // ]
 // res.json(cartoons);

  res.send("Cartoons Route")
});

app.post('/cartoons', (req, res) => {
  let title = req.body.title;
  let year = req.body.year;
  console.log(title);
  console.log(year);

  res.send('All good!')
} )

app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
})
