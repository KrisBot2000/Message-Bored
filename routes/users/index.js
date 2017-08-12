const express = require('express');
const router = express.Router();


const Topics = require('../../models').topics;
const Users = require('../../models').users;
const Messages = require('../../models').messages;


//   api/users/index.js
// GET /api/users
// respond with all users

  router.get('/', (req, res) => {
    return Users.findAll()
    .then(users => {
      res.json(users);
      //console.log(users);
    });
  });


// api/users/index.js
// GET /api/users/:id
// respond with user and all messages author'd by this user

  router.get('/:id', (req, res) => {
    let userId = req.params.id;
    //console.log('userId: ', userId);
    return Users.findById(userId,
      {include: [{model: Messages, include :[{model: Topics, attributes:['name']}],attributes:['body', 'createdAt']}]}
    )
    .then(userWithMessages => {
      console.log('express route:', userWithMessages);
      res.json(userWithMessages);
    })
    .catch(err => {
      res.send(400, err.message);
    });
  });


// api/users/index.js
// POST /api/users
// create and respond with new user

  router.post('/', (req, res) => {
    console.log('req.body', req.body);
    return Users.create({
      username: req.body.username//,
      //password: req.body.password
    })
    .then( (user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
  });


module.exports = router;