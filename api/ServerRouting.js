import http from 'http';
import fs from 'fs/promises' // file system
import url from 'url'; 
import path from 'path'; // find path on file system (just makes it easy to combine strings for fs)

const __filename = url.fileURLToPath(import.meta.url); // file name
const __dirname = path.dirname(__filename); // directory name

const PORT = process.env.PORT; // the port (from env files for sensitive information, eg api keys)

const server = http.createServer(async function(req, res) {
    try{
        //check if GET request
        if (req.method === 'GET') {
            let filePath; // to choose what HTML to send back
            if (req.url === '/') { // if regular (no extension)
                filePath = path.join(__dirname,'/../public/index.html') // starts at directory, then goes back and finds public, file
            } else if (req.url === '/about') { 
               filePath = path.join(__dirname,'/../public/about.html')
            } else { // if neither source or about
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end("<h1> 404 NOT FOUND</h1>");
            }
        const data = await fs.readFile(filePath) //reads the file path (find file)
        res.setHeader('Content-type', 'text/html') // Send HTML
        res.write(data); // puts the file into the response
        res.end() // ends connection
        } else{
            throw new Error('Method not allowed'); // Wrong method (eg POST) 
        }

        
    } catch (error) { // if fail for some reason
        console.log(error); // error is logged to terminal
        res.writeHead(500, {'Content-Type': 'text/plain'}); // plaintext
        res.end("SERVER ERROR"); // sends server error message
    }
    //res.setHeader('Content-type', 'text/html')  //sets type of content - returns text or html
    //res.statusCode = 401; // sets status code
    //res.write('Hello chat'); // sends text

    /* res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({Message: 'Welcome to the server'})); // ends stream, can also send text with it
    */
})

server.listen(PORT, function() { // when port created on the specific port it's fed, runs function
    console.log(`Server running on port ${PORT}`) // prints successful boot message
})

