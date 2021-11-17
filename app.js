const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('asdasd');
    }
    if(req.url === '/about') {
        res.end('f u');
    }
    res.end('<h1>no way u can</h1>')
})

server.listen(5000)