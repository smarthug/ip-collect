const express = require('express')
const requestIp = require('request-ip');
const app = express()
app.use(requestIp.mw())


app.use(function(req, res) {
    const ip = req.clientIp;
    console.log(ip)
    res.end(ip);
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)