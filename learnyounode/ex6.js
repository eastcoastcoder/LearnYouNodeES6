const ex6mod = require('./ex6mod');

const dir = process.argv[2];
const ext = process.argv[3];

ex6mod(dir, ext, (err, list) => {
  if (err) return console.error(err);
  return list.map(item => console.log(item));
});

/*
// For Each
list.forEach(function (list) {
    console.log(list);
})

// Iterative
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
*/
