#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  if(req.url === '/' && req.method === 'POST')
{
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`)
  req.pipe(process.stdout);
}else{
  res.statusCode = 404;
  res.end('Error!');
}
}).listen(8080);
