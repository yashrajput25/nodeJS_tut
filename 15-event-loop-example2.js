const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("request event")

    // if(req.url === '/' ){
    //     res.end("Welcome to our page")
    // }
    // if(req.url === '/about'){
    //     res.end("This is about page")
    // }
    res.end("Error");
})

server.listen(3000, () => {
    console.log("Server listening on port 3000");
})