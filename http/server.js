const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hey this is my server</h1>");
    res.end();
}).listen(4500);