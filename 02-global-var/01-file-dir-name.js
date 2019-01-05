#!/usr/bin/node

console.log("file name:",__filename);
console.log("dir name:",__dirname);

var fileName = __dirname+ "/views/view.html";
console.log("fileName:",fileName);
//方案1:不好，没有考虑跨平台

