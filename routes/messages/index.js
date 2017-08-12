const express = require('express');
const router = express.Router();

const Messages = require('../../models').messages;
const Users = require('../../models').users;
const Topics = require('../../models').topics;

//   api/messages/index.js
// GET /api/messages/latest
// respond with the latest 10 messages including the name of the topic including the author's name

router.get('/latest', (req, res) => {
  return Messages.findAll({
    limit: 10,
    order: [['createdAt', 'DESC']]
    }
  )
  .then((messages) => {
    res.json(messages);
  })
});

//  api/messages/index.js
// POST /api/messages
// create and respond with the new message

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    return Messages.create({
      body: req.body.body,
      topic_id: req.body.topic_id,
      author_id: req.body.author_id
    })
    .then((topic) => {
      res.json(topic);
    })
    .catch((err) => {
      console.log(err);
    });
  });

//  api/messages/index.js
// GET /api/messages/by-topic/:topic_id
// respond with all messages that belong to the topic by :topic_id including the author's name, including the topic's name, ordered by createdAt ascending


router.get('/by-topic/:topic_id', (req, res) => {
  let topicId = req.params.topic_id;

  return Messages.findAll({
    order: [['createdAt']],
    include: [
      {
       model: Users,
       attributes:['username']
      },
      {
        model: Topics,
        attributes:['name'],
        where: {
          id: topicId
        }
      }
    ]
  })
  .then(allMessagesByTopic => {
    console.log('express route:', allMessagesByTopic);
    res.json(allMessagesByTopic);
  })
  .catch(err => {
    res.send(400, err.message);
  });
});









module.exports = router;