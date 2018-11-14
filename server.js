var http = require('http');
const app = require('./app');

function onRequest(req, res){
    console.log("GG");
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("h");
    res.end();
}

var server = http.createServer(app);
server.listen(3000);