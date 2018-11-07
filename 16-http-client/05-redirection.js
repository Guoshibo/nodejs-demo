#!/usr/bin/node

const http = require('http'),
       url = require('url');

const addr= process.argv[2] || 'http://www.sian.com/';

function getOption(addr){
  var options = url.parse(addr);
  options.headers = {
  'User-Agent':'05-redirection.js'
  };
  return options;
}

function getURL(opt){
  http.get(opt,(res)=>{
   console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
   console.log(res.headers);
   console.log('');

    if(res.statusCode > 300 && res.statusCode < 400){
      var newAddr = res.headers.location;
      getURL(newAddr);
    }
    else{
      res.pipe(process.stdout);
    }
  });
}
getURL(addr);
