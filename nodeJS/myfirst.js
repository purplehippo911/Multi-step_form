const http = require("http");
var url = require("url");

// create a server object
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/html" });
    var q = url.parse(req.url, true).query;
    var text = `${q.year}, ${q.month}`;
    // res.write(req.url); // write a response to the server
    res.end(text); // end the response
}).listen(8080); // the server object listens on port 8080