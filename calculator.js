let a = parseInt(process.argv[2]);
let b = process.argv[3];
let c = parseInt(process.argv[4]);

if(b == '+'){
    result = a + c;
}else if(b == '-'){
    result = a - c;
}else if(b == '/'){
    result = a / c;
}else if(b == '*'){
    result = a * c;
}else{
    console.log('Operation cannot be processed');
}

console.log(`Output is = ${result}`);