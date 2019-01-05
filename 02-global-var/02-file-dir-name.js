#!/usr/bin/node

console.log('file name:', __filename);
console.log('dir name:', __dirname);

switch(process.platform){
  case "linux":
    fileName = __dirname + "/views/view.html";
    break;
  case "win32":
    fileName = __dirname + "\\views\\view.html";
    break;
  default:
    fileName = "something wrong";
}
console.log("fileName:",fileName);
