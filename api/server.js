import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer(function(req, res) {
    try{
        //check if GET request
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({Message: 'Welcome to the server'})); // ends stream, can also send text with it
            } else if (req.url === '/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Welcome to da club</h1>');
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end("<h1>NOT FOUND</h1>");
            }
        } else{
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("SERVER ERROR");
    }
    console.log(req.url);
    console.log(req.method);
    


    //res.setHeader('Content-type', 'text/html')  //sets type of content - returns text or html
    //res.statusCode = 401; // sets status code
    //res.write('Hello chat'); // sends text
})

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
})

