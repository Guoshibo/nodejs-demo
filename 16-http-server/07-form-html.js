#!/usr/bin/node

const http = require('http'),
        fs = require('fs'),
        qs = require('querystring');
var items=[];
http.createServer((req,res)=>{
  console.log(req.method,req.url,'HTTP/'+req.httpVersion);
  console.log(req.headers);
  console.log();
  if(req.url === '/' && req.method === 'GET'){

showPage(req,res);

}else if(req.url === '/' && req.method ==='POST'){
  var data = '';
  req.on('data',(chunk)=>{data+=chunk;});
  req.on('end',()=>{
    var list = qs.parse(data);

    if(list.item!=='')items.push(list.item);
    showPage(req,res);
  });
}else{
  res.statusCode = 404;
  rs.end('Error!');
}
}).listen(8080);



function showPage(req,res){
  var html = fs.readFileSync('todo-list-template.html').toString('utf8'); 
  html= html.replace('%',items.map(function(item){
    return '<li>'+item+'</li>';
  }).join('\n'));
  res.end(html);
}
