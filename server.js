var express = require('express');
var cors = require('cors');
require('dotenv').config()
const {SERVER_PORT}= process.env
var app = express();
var multer  = require('multer')
var upload = multer();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req,res)=>{
  console.log(req.file)
  const {originalname, mimetype, size}=req.file
  res.json({
    name:originalname,
    type:mimetype,
    size,

  })
})



app.listen(SERVER_PORT, function () {
  console.log('Your app is listening on port ' + SERVER_PORT)
});
