import http from 'http';
import fs from 'fs/promises' // file system
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // directory name

console.log(__filename);
console.log(__dirname);

const PORT = process.env.PORT;

const server = http.createServer(async function(req, res) {
    try{
        //check if GET request
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname,'/../public/index.html')
            } else if (req.url === '/about') {
               filePath = path.join(__dirname,'/../public/about.html')
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end("<h1>NOT FOUND</h1>");
            }
        const data = await fs.readFile(filePath)
        res.setHeader('Content-type', 'text/html')
        res.write(data);
        res.end()
        } else{
            throw new Error('Method not allowed');
        }

        
    } catch (error) {
        console.log(error);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("SERVER ERROR");
    }
    console.log(req.url);
    console.log(req.method);
    


    //res.setHeader('Content-type', 'text/html')  //sets type of content - returns text or html
    //res.statusCode = 401; // sets status code
    //res.write('Hello chat'); // sends text

    /* res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({Message: 'Welcome to the server'})); // ends stream, can also send text with it
    */
})

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
})

