#!/usr/bin/node

const http = require('http'),
       url = require('url'),
        qs = require('querystring');

var items=[];

http.createServer((req,res)=>{
  //if(req.url==='/' && req.method === 'GET')
  //点击按钮时候会报错
  if(url.parse(req.url).pathname === '/' && req.method === 'GET')
{
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log('');
  //var data = url.parse(req.url).query;
 // items.push(data.item);
 
  var data = qs.parse(url.parse(req.url).query);
  console.log('query string:',url.parse(req.url).query);
  console.log('data:',data);
  req.pipe(process.stdout);
  var html=''
  +'<!DOCTYPE html>'
  +"<html lang='en'>"
  +'<head>'
  +'<meta charset="utf=8">'
  +'<title>Todo list</title>'
  +'</head>'
  +'<body>'
  +'<h1>Todo list</h1>'
  +"<from method='get' action='/'>"
  +"<input type='text' name='item'/>"
  +"<input type='button' value='Add item'/>"
  +'</from>'
  +'</body>'
  +'</html>';
  res.end(html);
}else{
  res.statusCode = 404;
  res.end('Error!');
}
}).listen(8080);

