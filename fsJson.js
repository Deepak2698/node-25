
const fs = require('node:fs');

const OTT = {
    webSeries: 'The Family Man',
    platform:'Amazon-prime'
}

let series = JSON.stringify(OTT);

// fs.writeFile('series.json',series, (err,data) => {
//     if(err) throw err;
//     console.log('JSON file Updated');
// });

fs.readFile('series.json', (err,data) => {
    if(err) throw err;
    console.log(`${data}`);
    let resultSeries = JSON.parse(series);
    console.log(resultSeries.webSeries);
    console.log(resultSeries.platform);
})