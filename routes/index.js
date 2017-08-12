const express = require('express');

const userRoutes = require('./users');
const topicRoutes = require('./topics');
const messageRoutes = require('./messages');


const router = express.Router();



router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
router.use('/messages', messageRoutes);







module.exports = router;