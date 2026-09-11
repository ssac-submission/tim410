const express = require ('express');
const app = express();

app.get('/image1', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const absolutePath = __dirname + '/image1.jpg';
  res.sendFile(absolutePath);
})

app.get('/image2', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const absolutePath = __dirname + '/image2.jpg';
  res.sendFile(absolutePath);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})