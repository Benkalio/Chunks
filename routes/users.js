const express = require('express')
const router = express.Router()

// authenticate middleware
function authenticate(req,, res, next) {
  if (req.session) {
    if(req.session.name) {
      next()
    } else {
      res.redirect('/users/add-user')
    }
  } else {
    res.redirect('/users/add-user')
  }
}

router.get('/', (req, res) => {
  let user = {
        name: req.session.name,
        age: req.session.age,
        address: "43 Romford street"
      };

  res.render('index', user);
});

router.get('/add-user', (req, res) => {
  res.render('add-user');
});

router.get('/bank-accounts', authenticate, (req, res) => {
  res.send('Bank accounts')
})

router.post('/add-user', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  if (req.session) {
    req.session.name = name;
    req.session.age = age;
  }

  console.log(name);
  console.log(age);

  res.status(200).send();
});

router.get('/users', (req, res) => {
  let users = [
    {name: "Alex Cousins", age: 43},
    {name: "Bodd Norts", age: 45},
    {name: "Brocke Seden", age: 23}
  ];

    users = []

  res.render('users', {users: users});
});


module.exports = router
