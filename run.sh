#!/bin/bash

# Install Node
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get update -y
apt-get install -y nodejs

# Init a project
npm init -y

# Install dependencies
npm install express

# Install dependencies from other files
npm install --save controllers/messaging.js
npm install --save models/message.js
npm install --save services/messagingService.js

# Output success message
echo "Node, project, and dependencies installed successfully. You can now run your application with 'node app.js'"

# Expose variables
export messagingRouter=controllers/messaging.js
export messagingController=controllers/messaging.js
export Message=models/message.js
export messagingService=services/messagingService.js