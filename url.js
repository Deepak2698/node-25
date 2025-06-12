const url = require('node:url');

let address = 'https://www.zomato.com/pune';
// let address = new url('https://www.zomato.com/');

let value = url.parse(address,true);
console.log(value.auth);
console.log(value.path);
console.log(value.href);
console.log(value.host);
console.log(value.hostname);

