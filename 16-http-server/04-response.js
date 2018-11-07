#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  if(req.url==='/'){
    var html = ''
   +'<!DOCTYPE html>'
   +"<html lang='en'>"
   +'<head>'
   +'<meta charset="utf=8">'
   +'<title>hello</title>'
   +'</head>'
   +'<body>'
   +'<h1>hello world</h1>'
   +'</body>'
   +'</html>';

  //res.statusCode = 200;
  //res.setHeader('Content-Type','text/html');
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html)
});
  res.end(html);
  }else{
    res.end('error!');
  }
}).listen(8080)

