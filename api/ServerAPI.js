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
    }else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id))
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(user))
            res.end();
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json') // sends back json
            res.write(JSON.stringify({message: 'User not found'})); // stringify!
            res.end(); // ends connection
        }
    }
     else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json') // sends back json
        res.write(JSON.stringify({message: 'Route not found'})); // stringify!
        res.end(); // ends connection
    }
});

server.listen(PORT, function(){ // when server is created, send a message - PORT is to listen to a specific port when created
    console.log(`Server running on port ${PORT}`)
})



// cmd: node --watch --env-file=.env api/serverAPI.js