const http = require('http');
const url = require('url');

const routes = {
  '/api/parsetime': function(inputURL) {
    const date = new Date(inputURL.query.iso);
    return {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    };
  },
  '/api/unixtime': function(inputURL) {
    return { 'unixtime': (new Date(inputURL.query.iso)).getTime() };
  }
};

http.createServer((req, res) => {
  const inputURL = url.parse(req.url, true);
  const objectAtKey = routes[inputURL.pathname];
  if (objectAtKey) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(objectAtKey(inputURL)));
  }
  else {
    res.writeHead(404);
    res.end();
  }
}).listen(process.argv[2]);
