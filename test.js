var http = require('http');

var server = http.createServer(function(req, res){
    res.end('socialboosting.com')
})

server.listen('frantisek.socialboosting.com:3000');