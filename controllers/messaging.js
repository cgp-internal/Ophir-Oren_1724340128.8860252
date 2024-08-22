const express = require('express');
const { Message } = require('../models/message');
const { handleMessage } = require('../services/messagingService');
const messagingRoute = express.Router();

class MessagingController {
  async submitMessage(req, res) {
    try {
      const message = new Message(req.body.text);
      await handleMessage(message);
      res.status(201).send(`Message submitted successfully`);
    } catch (error) {
      res.status(500).send(`Error submitting message: ${error.message}`);
    }
  }
}

messagingRoute.post('/messages', async (req, res) => {
  const messagingCtrl = new MessagingController();
  await messagingCtrl.submitMessage(req, res);
});

module.exports = { messagingRouter: messagingRoute, MessagingController };