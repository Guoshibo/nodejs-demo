#!/usr/bin/node

console.log('file name:', __filename);
console.log('dir name:', __dirname);

const path = require("path");
fileName = path.join(__dirname,"views","view.html");

console.log("fileName",fileName);
