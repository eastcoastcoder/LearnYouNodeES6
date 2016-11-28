const fs = require('fs');

console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);

/*
const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const bufferAsString = buffer.toString();
const white = bufferAsString.split('\n');
console.log(white.length - 1);
*/
