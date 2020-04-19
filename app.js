var router = require("./router");
/*
    1. Create a web server
    2. handle HTTP route GET / and POST / i.e. Home
    3. Handle HTTP route GET /:username i.e. /chalkers
    4. Function that handles the reading of files and merge in value
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 5500;
let i=0;
const server = http.createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);
}).listen(port, hostname);

console.log(`Server running at http://${hostname}:${port}/`);

