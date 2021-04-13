const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (request, response)=> {
    console.log('new request');
    console.log('request ', request.url);

    let filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const filesTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',        
    };

    const contentType = filesTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) =>{
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', (error, content)=> {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);//internal server error
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType }); //OK
            response.end(content, 'utf-8');
        }
    });

});
server.listen(3015);
console.log('Server running at http://127.0.0.1:3015/');


// //cd 9.2-pure_node_pini
// //nodemon app.js



// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer( (request, response)=> {
//     if(request.url ==='/'){
//         fs.readFile('./index.html', 'utf-8', (error, html)=>{
//             response.writeHead(200, {'Content-Type':'text/html'});
//             response.end(html);
//         });
//     }
// });
// server.listen(3015);