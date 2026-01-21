import {createServer} from 'http'; 
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Barack Obama'},
];

const server = createServer(function(req, res) { // create server, request, response
    if (req.url === '/api/users' && req.method === 'GET') { // if url for users, and a get method
        res.setHeader('Content-Type', 'application/json') // sends back json
        res.write(JSON.stringify(users)); // stringify!
        res.end(); // ends connection
    }
});

server.listen(PORT, function(){ // when server is created, send a message - PORT is to listen to a specific port when created
    console.log(`Server running on port ${PORT}`)
})