#!/usr/bin/node
const cp=require('child_process');

cp.execFile('node',['02-child.js'],(err,out,error)=>{
  if(err){
        console.error(err.message);
            process.exit(100); 
  }

    console.log(out);

})
