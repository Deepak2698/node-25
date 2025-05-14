//File System Module

const fs = require('node:fs'); // Importing the file system module

// fs.writeFile('test.txt','We are Learning Node.js',(err) => {
//     if(err){
//         console.log(`Error Message is ${err}`);
//     }else{
//         console.log(`Data is ${data}`)
//     }
// });

fs.readFile('test.txt',(err,data) => {
    if(err){
        console.log(`Error Message is ${err}`);
    }else{
        console.log(`Data is ${data}`)
    }
})

