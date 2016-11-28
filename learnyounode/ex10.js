const net = require('net');

function padZero(number) { return (number < 10 ? '0' : '') + number; }

net.createServer((socket) => {
  const dateObj = new Date();

  const formattedDate = padZero(dateObj.getFullYear()) + '-' +
                        padZero(dateObj.getMonth() + 1) + '-' +
                        padZero(dateObj.getDate()) + ' ' +
                        padZero(dateObj.getHours()) + ':' +
                        padZero(dateObj.getMinutes()) + '\n';

  socket.end(formattedDate, 'utf8');
}).listen(process.argv[2]);
