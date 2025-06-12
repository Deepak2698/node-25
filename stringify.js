const OTT = {
    webSeries: 'The Family Man',
    platform:'Amazon-prime'
}

const series = JSON.stringify(OTT); // It takes JS objects and returns the string
console.log(series); // JSON String

const parsedSeries = JSON.parse(series); // It takes JSON string and converts it to JS objects
console.log(parsedSeries.webSeries);
console.log(parsedSeries.platform);