const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const dist = '/dist/';
const index = '/dist/index.html';

app.use(express.static(`__dirname${dist}`));
app.get(/.*/, (req, res) => {
  res.sendfile(`__dirname${index}`);
});

app.listen(port);
// console.log('server started on ' + port);
