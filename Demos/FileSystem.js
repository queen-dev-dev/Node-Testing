import fs from 'fs';

// readFile() - callback
fs.readFile('./Demos/testing.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// readFileSync() - Synchronous BLOCKING version

const data = fs.readFileSync('./Demos/testing.txt', 'utf8');
console.log(data);


// Build command node Demos/FileSystem.js