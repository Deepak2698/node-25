// let prom = new Promise((resolve,reject) => {
// // Here we can have the response functionality from resolve and reject

// console.log(`Promise is in pending state`);
// setTimeout(() => {
//     // console.log(`Resolved state`);
//     resolve('Node');

//     // console.log(`Rejected State`);
//     reject(null);
// },3000)
// });

// prom.then((value) =>{
//     console.log(`Resolved response is : ${value}`)
// }).catch((error) => { //Handling Errors or rejected response also known as exception handling
//     console.log(`Error message is : ${error}`)
// });

let prom = new Promise((resolve,reject) => {
    let num = 10;
    let num1 = '10';
    if(num === num1){
        resolve('Value is same');
    }else{
        reject('Value is same but datatype is different');
    }
})

prom.then((value) =>{
    console.log(`Resolved response is : ${value}`)
}).catch((error) => { //Handling Errors or rejected response also known as exception handling
    console.log(`Error message is : ${error}`)
});