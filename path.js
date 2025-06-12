const path = require("node:path");

let path_address = '/Users/deepaksmac/Desktop/MERN-COURSE/Node.Js/node-25/path.txt';

// console.log(path.basename(path_address)); // helps identify the base name
// console.log(path.extname(path_address)); // helps identify the extension
// console.log(path.dirname(path_address)); // helps identify the directory/folder address
console.log(path.isAbsolute(path_address)); // helps identify whether path provided or not