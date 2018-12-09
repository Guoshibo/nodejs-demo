#!/usr/bin/node

const http = require('http');

const serve = http.createServer();
serve.on('request',(req,res)=>{
  res.end('hello');
})
serve.listen(8080);
