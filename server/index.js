const express = require('express');

const app = express();
const path = require('path');

app.use((err, req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'app/web/', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server running on port ${process.env.PORT || 3000}`);
});
