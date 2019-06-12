const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) =>{
    fs.readFile("./resources/my_page.html",(err,data) =>{
        if(err) { console.error(err); return;}
        res.end(data);
    });
});
console.log("inicia Server");
server.listen(3000);