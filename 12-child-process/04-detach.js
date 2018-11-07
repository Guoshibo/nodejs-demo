#!/usr/bin/node
const cp = require('child_process');
console.log('I am father process,PID:',process.pid);
var cmd = cp.spawn('node',['02-child.js'],{detached:true,stdio:['ignore',1,2]});
//cmd.stdout.pipe(process.stdout);
var timer=global.setTimeout(()=>{
  console.log('I am father,goodbye!');
  process.exit();
},600);
global.setTimeout(()=>{
    global.clearTimeout(timer);
},60000)

