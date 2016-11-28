const request = require('request');

// Request Module Method
request.get({
  'uri': process.argv[2],
}, (err, response, body) => {
  if (err) return console.error(err);
  return console.log(body.length + '\n' + body);
});

/*
// http.get Method
var http = require('http');

http.get(process.argv[2], (res) => {
    var allData = '';
    res.setEncoding('utf8');
    res.on('data', (data) => allData += data );
    res.on('end', () => {
        console.log(allData.length);
        console.log(allData);
    });
}).on('error', console.error );


// bl Method
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/
