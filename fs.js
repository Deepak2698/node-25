//File System Module

const fs = require('node:fs'); // Importing the file system module

// fs.writeFile('test.txt','We are Learning Node.js',(err) => {
//     if(err){
//         console.log(`Error Message is ${err}`);
//     }else{
//         console.log(`Data is ${data}`)
//     }
// });

// fs.readFile('test.txt',(err,data) => {
//     if(err){
//         console.log(`Error Message is ${err}`);
//     }else{
//         console.log(`Data is ${data}`)
//     }
// })

// fs.readFileSync('test1.txt','hello from sync');


//open

// fs.open('test.txt','r+',(err,data) => {
//     if(err){
//         console.log(`error message is : ${err}`);
//     }else{
//         console.log(`file has been opened succesfully ` );
//     }
// })


//get

// fs.stat('test.txt',(error,stats) => {
//     if(error){
//        return console.error(error);
//     }
//         console.log(stats);
//         console.log(`Getting into the file`);
//         console.log(`isFile ? = ${stats.isFile()}`);
//         console.log(`isDirectory ? = ${stats.isDirectory()}`);
    
// })


//rename

// fs.rename('test1.txt','fsFile.txt',(err) => {
//     if(err){
//         console.error(err);
//     }
//     console.log(`File Renamed successfully`);
// })

//Appending

// fs.appendFile('fsFile.txt','\n Vaishnavi and Aniruddha are learning FS Module',(error,data) => {
//     if(error){
//         console.log(`Error Message is : ${error}`);
//     }else{
//         console.log(`Data added successfully and data is ${data}`);
//     }
// })

//Delete

fs.unlink('fsFile.txt',(err) => {
    if(err){
        console.log(`Error message is : ${err}`);
    }else{
        console.log(`Bali Chadh Gya`);
    }
})