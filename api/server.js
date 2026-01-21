import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer(function(req, res) {
    console.log(req.url);
    console.log(req.method);
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({Message: 'server error'})); // ends stream, can also send text with it
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to da club</h1>');
    } else {
        res.writeHead(403, {'Content-Type': 'text/plain'});
        res.end("ERROR, INCORRECT ADDRESS");
    }


    //res.setHeader('Content-type', 'text/html')  //sets type of content - returns text or html
    //res.statusCode = 401; // sets status code
    //res.write('Hello chat'); // sends text
})

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
})

