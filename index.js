const http = require('http');
const path = require('path');
const uuid = require('uuid');
const url = require('url');
const fs = require('fs');

const _p = (...p) => path.join(__dirname, ...p);

const server = http.createServer((req, res) => {
    // switch (req.url) {
    //     case '/':
    //         fs.readFile(_p('/public', 'index.html'), 'utf8', (err, content) => {
    //             if (err) throw err;

    //             res.writeHead(200, {
    //                 'Content-Type': 'text/html',
    //             });
    //             res.end(content);
    //         });
    //         break;
    //     case '/about':
    //         fs.readFile(_p('/public', 'about.html'), 'utf8', (err, content) => {
    //             if (err) throw err;

    //             res.writeHead(200, {
    //                 'Content-Type': 'text/html',
    //             });
    //             res.end(content);
    //         });
    //         break;
    //     case '/api/users':
    //         const users = [
    //             {
    //                 id: uuid.v4(),
    //                 name: 'John',
    //                 age: 40,
    //             },
    //             {
    //                 id: uuid.v4(),
    //                 name: 'Bob',
    //                 age: 40,
    //             }
    //         ];
    //         res.writeHead(200, { 'Content-Type': 'application/json' });
    //         res.end(JSON.stringify(users));
    //         break;

    //     default:
    //         res.end();

    // }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extemsopm
    let extname = path.extname(filePath);

    // Initial content type;
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;

        case '.ico':
            contentType = 'image/x-icon';
            break;
    }

    console.log(filePath);

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {
                        'Content-Type': 'text/html',
                    });
                    res.end(content, 'utf8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // succes
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});