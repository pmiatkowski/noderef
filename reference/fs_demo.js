const fs = require('fs');
const path = require('path');

const p = function (...p) {
    return path.join(__dirname, ...p);
};

// Create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created');
// });

// create and write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world', err => {
//     if (err) throw err;
//     console.log('File written to...');

// });

// // Append to existing file
// fs.appendFile(
//     p('/test', 'hello.txt'),
//     'ARRR',
//     err => {
//         if (err) throw err;
//         console.log('File appended to...');
//     });

// // Read file
// fs.readFile(p('/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(p('/test', 'hello.txt'), p('/test', 'renamed.txt'), err => {
    if (err) throw err;
    console.log('File renamed...');
});