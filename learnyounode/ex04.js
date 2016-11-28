const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, bufferAsString) => {
  if (err) return console.log(err);
  return console.log(bufferAsString.split('\n').length - 1);
});
