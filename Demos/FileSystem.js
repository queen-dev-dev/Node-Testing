import fs from 'fs';

// readFile() - callback
fs.readFile('./testing.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})