const express = require('express');
const request = require('request');
const path = require('path');

const authBaseURL = 'https://github.com/';
const apiBaseURL = 'https://api.github.com';

const app = express();

app.use('/api/login', (req, res) => {
  const url = `${authBaseURL}login${req.url}`;
  return req.pipe(request.get(url)).pipe(res);
});

app.use('/api', (req, res) => {
  let url = apiBaseURL + req.url;
  if (req.url.split('/')[0] === 'login') {
    url = authBaseURL + req.url;
  }
  return req.pipe(request.get(url)).pipe(res);
});

app.use(express.static(path.resolve(__dirname, '..', 'app/web')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'app/web/', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server running on port ${process.env.PORT || 3000}`);
});
