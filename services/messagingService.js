const { Message } = require('./models/message');

class MessagingService {
  async handleMessage(message) {
    if (!(message instanceof Message)) {
      throw new Error('Invalid message object');
    }

    console.log(`Received message: ${message.getText()}`);

    const response = new Message(`Response to: ${message.getText()}`);

    return response;
  }
}

module.exports = { MessagingService };