#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var child = cp.fork('06-ipc-child.js');

child.on('message', (msg) => {
    console.log('msg from child:', msg);

});

setTimeout(() => {
    child.send('I am father process. PID: ' + process.pid);
},12000);
