const express = require('express');
const router = express.Router();

//    /api/users


//   api/users/index.js
// GET /api/users
// respond with all users

  router.get('/', () => {
    res.send ('GET all Users');
  });

// api/users/index.js
// GET /api/users/:id
// respond with user and all messages author'd by this user

  router.get('/:id', (req, res) => {
    res.send ('GET user with id: ' + req.params.id);
  });

// api/users/index.js
// POST /api/users
// create and respond with new user











module.exports = router;