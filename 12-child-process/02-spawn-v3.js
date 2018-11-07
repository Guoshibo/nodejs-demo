#!/usr/bin/node
const http = require('http'),
      cp   = require('child_process');
http.createServer((req,res)=>{
  var cmd = cp.spawn('cat',['02-child.js']);
  cmd.stdout.pipe(res);
}).listen(8080);
