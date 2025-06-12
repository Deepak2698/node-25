function delay(sec,callback){
    setTimeout(callback,sec*1000);
}

console.log('Delay Started');
delay(2,() => {
    console.log('Two Seconds');
    delay(1,() => {
        console.log('One Second delay total time is three seconds');
        delay(1,() => {
            console.log('One Second delay total time is four seconds');
        })
    })
})