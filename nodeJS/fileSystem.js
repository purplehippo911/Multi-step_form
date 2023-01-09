var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
fs.appendFile("./fileSystem.txt", "w", (err) => {
    if (err) throw err;
    console.log("Saved!")
});
}).listen(8080);