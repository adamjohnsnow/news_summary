var httpServer = require("http-server");
var path = require("path");

var server = httpServer.createServer({root: __dirname, cache: 0})
server.listen(8080);
console.log('App running on port 8080')
