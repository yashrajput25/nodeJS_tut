const http = require('http');

const server = http.createServer((req, res) =>{

    if(req.url === '/' ){
        res.end("Welcome to our page")
    }
    if(req.url === '/about'){
        res.end("This is about page")
    }
    res.end("Error");
})

server.listen(3000)