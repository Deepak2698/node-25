
var http = require('node:http');


http.createServer((request, response) => {

    response.writeHead(200);
        
    const url = request.url;

    // Routing
    switch (url) {
        case '/login':
            response.write("Welcome to Login page !!!");
            break;
        case '/restaurants':
            response.write("List of restaurants");
            break;
        case '/locations':
            response.write("List of locations");
            break;
        default:
            response.write("Please ask something valid !");
    }

    response.end();

}).listen(5400); // http://localhost:5400


// Series of status codes

/*
100 (Informations)
200 (Success)
300 (Redirection)
400 (Error in the request) => Client side error
500 (Error in the response) => Server side error
*/