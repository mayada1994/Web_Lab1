require('dotenv').config(); // Read .env

const router = require('./router'); //Custom
const http = require('http'); //Server
const url = require('url'); //Request URL
const port = process.env.PORT;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => { // req - Request, res - Response

  let path = url.parse(req.url, true).pathname; //Get path
  router.getRoute(path, (info) => {                             //Custom component
    res.writeHead(info.code); // Generating response
    if(info.code === 200) {
      res.write(info.data, (err) => {
        if(info.isFile) {
          router.saveHistory(path, req.connection.remoteAddress);
        }
        return res.end();
      });
    } else {
      return res.end(info.message);
    }
  });
}).listen(port);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/${require("os").userInfo().username}/`);
});