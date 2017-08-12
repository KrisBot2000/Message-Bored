const express = require('express');
const router = express.Router();

const Topics = require('../../models').topics;
const Users = require('../../models').users;



//   api/topics/index.js
// GET /api/topics
// respond with all topics including the creator's name

router.get('/', (req, res) => {
    return Topics.findAll({
      include: [{
        model: Users,
        attributes: ['username']
      }]
    })
    .then(topics => {

      res.json(topics);
      console.log(topics);
    });
  });

//   api/topics/index.js
// POST /api/topics
// create and respond with a new topic

router.post('/', (req, res) => {
    //console.log('req.body', req.body);
    return Topics.create({
      name: req.body.name,
      created_by: req.body.created_by
    })
    .then((topic) => {
      res.json(topic);
    })
    .catch((err) => {
      console.log(err);
    });
  });

//   api/topics/index.js
// PUT /api/topics/:name
// update and respond with the updated topic

router.put('/', (req, res) => {
  return Topics.update({
    name: req.body.name
  },
  {
    where: {id: req.body.id}
  })
  .then((topic) => {
  res.json(topic);
  });
});






module.exports = router;