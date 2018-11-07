#!/usr/bin/node
const http = require('http');
       url = require('url');
var address = process.argv[2] || 'http://localhost:8080';
var options = {
  hostname:url.parse(address).hostname,
  port: url.parse(address).port,
  path:url.parse(address).pathname,
  //path:url.parse(address).path,
  method:url.parse(address).post,
  headers:{
    'User-Agent':'01-my-curl.js'
  }
};
//options.method="POST";

var req=http.request(options,(res)=>{
  console.log('HTTP/${res.httpVersion} res.stausCode res.statusMessage');
  console.log(res.headers);
 // console.log(); 
  res.pipe(process.stdout);
  res.setEncoding('utf8');
  res.on('data',(data)=>{
    console.log();
    console.log('body:',data);
  });
}).on('error',(err)=>{
  console.log('problem with request:', err.message);
});
req.write(address+'\n');
req.end;

