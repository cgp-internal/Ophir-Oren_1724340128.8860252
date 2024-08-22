const express = require('express');
const { messagingController } = require('../controllers/messaging');

const messagingRouter = express.Router();

messagingRouter.post('/messages', messagingController.submitMessage);

module.exports = { messagingRouter };