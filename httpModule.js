const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;
const host = '127.0.0.1';

const server = http.createServer((request, response) => {
    console.log(request.url);
    const base = url.parse(request.url);
    //console.log(base);
    const fileName = './mods' + base.pathname;
    fs.readFile(fileName, (error, html) => {
        if(error) {
            response.writeHead(404, {
                'Contenet-type' : 'text/html'
            });
            response.end(`<h1>Not Found</h1>`);
        } else {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(html);
            // response.write(`Request URL: ${request.url}`);
            response.end();
        }
    })
})
server.listen(port, host, () => {
    console.log('ready');
})