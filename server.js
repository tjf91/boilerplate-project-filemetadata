var express = require('express');
var cors = require('cors');
require('dotenv').config()
const {SERVER_PORT}= process.env
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});





app.listen(SERVER_PORT, function () {
  console.log('Your app is listening on port ' + SERVER_PORT)
});
