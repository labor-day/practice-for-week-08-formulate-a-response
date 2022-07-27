// Your code here
const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

let http = require('http');

let serverFunction = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(responseBody);
}

const server = http.createServer(serverFunction);

const port = 5000;

const logFunction = () => {
  console.log('Server is listening on port', port);
}

server.listen(port, logFunction);
