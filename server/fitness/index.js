var express = require('express')
var app = express()
const port = 8080;

app.get('/',(req,res) => res.send('Hello World!'));

app.listen(port,() => console.log('Example app http://localhost:${port}'));
