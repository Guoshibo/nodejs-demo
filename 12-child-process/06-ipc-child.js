#!/usr/bin/node

console.log('I am the child process. PID:',process.pid);

process.send('Child process is strated!' + process.pid);
process.on('message',(msg)=>{
    console.log('message from father:',msg);

})
