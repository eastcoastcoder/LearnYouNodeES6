const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dir, (err, list) => {
  if (err) return console.error(err);
  return list.map(item => ((path.extname(item) === ext) ? console.log(item) : null));
});

/* Iterative Solution
    for (var i = 0; i < list.length; i++){
        if(path.extname(list[i]) == ext)
            console.log(list[i]);
    }

    For Each Solution
    list.forEach((file) => {
         if(path.extname(file) === ext) {
           console.log(file)
    }
*/
