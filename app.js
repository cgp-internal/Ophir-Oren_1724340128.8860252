const express = require('express');
const { messagingRouter } = require('./controllers/messaging');

const app = express();
app.use(express.json());

app.use('/messaging', messagingRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
module.exports = { app };