import {createServer} from 'http';
const PORT = process.env.PORT;
0
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Barack Obama'},
];

const server = createServer(function(req, res) {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users));
        res.end();
    }
});

server.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
})