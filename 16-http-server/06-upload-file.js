#!/usr/bin/node

const http = require('http'),
querystring = require('querystring'),
        fs = require('fs');

const uploadPage = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Upload File</title></head><body><h1>Upload</h1><form method="POST" action="/" enctype="multipart/form-data"><input type="file" name="filename"><input type="submit" value="Upload"></form></body></html>';

const backPage = '<!DOCTYPE html><html><head><title>Back</title><meta charset="utf-8"/></head><body><h1>OK! Upload Sucess!</h1><a href="/">Continue to Upload File</a></body></html>';

const errorPage = '<!DOCTYPE html><html><head><title>Error</title><meta charset="utf-8"/></head><body><h1>Something Wrong!</h1><a href="/">Back to Upload</a></body></html>';

http.createServer((req,res)=>{
      console.log(req.method,req.url,'HTTP/' + req.httpVersion);
      console.log(req.headers);
      console.log();
      if(req.url === '/' && req.method === 'GET'){
        showpage(req,res,uploadPage);
      }else if(req.url === '/' && req.method === 'POST'){
        var data = '';
        req.setEncoding('binary'); // 保证可以读取任何的文件,对应的是二进制编码
        req.on('data',(chunk)=>{data+=chunk;});
        req.on('end',()=>{
        var das = data.split('\r\n');
        // 找到文件内容和文件名称 进行创建
        var fileData = das[4];
        var fileName = querystring.parse(das[0].split('; ')[2]).filename;
        fileName = fileName.slice(1,fileName.length-1);
        fs.writeFileSync(fileName,fileData).toString('binary');// 二进制的形式进行
        showpage(req,res,backPage);                                                      
        });                       
      } else{
        showpage(req,res,errorPage);           
              }

}).listen(8080);

function showpage(req,res,page){
    res.statusCode = (page === 'errorPage')?404:200;
      res.setHeader('content-type','text/html');
        res.setHeader('content-length',Buffer.byteLength(page));
          res.end(page);

}
