var http = require('http');
var url = require('url');

http.createServer(function(request, response) {

    var baseURL = 'inbgdev1.informatica.com';
    var port = 49085;
    // var path = url.parse(request.url).pathname;
    // // var path = '/DGA/1/dg/models/classModels/DGCategory';
    // // var path = request.path;
    // var method = request.method;
    // console.log(path);
    // console.log(method);
    var options = {
        "protocol": "http:",
        "host": baseURL,
        "port": port,
        "path": path,
        "method": method
    };
    var allData = "";

    var req = http.request(options, function(res) {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            allData += chunk;
        });
        res.on('end', () => {
            console.log('No more data in response.');
            response.setHeader("Content-type", "application/json");
            response.end(allData);
        });
    });
    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });

    req.end();
}).listen(3500, '127.0.0.1');
