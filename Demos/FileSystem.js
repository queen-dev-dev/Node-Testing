/*import fs from 'fs';

// readFile() - callback
fs.readFile('./Demos/testing.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// readFileSync() - Synchronous BLOCKING version

const data = fs.readFileSync('./Demos/testing.txt', 'utf8');
console.log(data);

*/

import fs from 'fs/promises'

//readFile() - promise .then()
/*fs.readFile('./Demos/testing.txt', 'utf-8')
.then((data) => console.log(data))
.catch((error) => console.log(error));
*/
// readFile() - async / await, generally best
const readFile = async function() {
    try{
        let data = await fs.readFile('./Demos/testing.txt', 'utf-8');
        console.log(data);
    }
    catch (err){
        throw err;
    }
}


// writeFile

const writeFile = async function() {
    try{
       await fs.writeFile('./Demos/testing.txt', ' This file SUCKS i HATE it');
       console.log('file has been written to ;)');
    }
    catch (err){
        console.log(err);
    }
}

// appendFile()
const appendFile = async function() {
    try{
        await fs.appendFile('./Demos/testing.txt', '  This file is lovely and jolly');
        console.log('appended !');
    }
    catch (err){
        throw err;
    }
}

appendFile();
readFile();



// Build command                                  node Demos/FileSystem.js