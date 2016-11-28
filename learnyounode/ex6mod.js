const fs = require('fs');
const path = require('path');

module.exports = function example6(dir, ext, callback) {
  (fs.readdir(dir, (err, list) => {
    if (err) return callback(err, null);
    // Filter back to list variable
    return callback(null,
      list.filter(item => path.extname(item) === `.${ext}`)
    );
  })
  );
};

/*
// path.extname();
// https://nodejs.org/api/path.html#path_path_extname_path
var results = [];
ext = '.' + ext;

// Iterative Soln
for (var i = 0; i < list.length; i++){
    if(path.extname(list[i]) == ext)
        results.push(list[i]);
};

// Map Soln
list.map((item, index) => {
    if(path.extname(list[index]) == ext)
        results.push(item);
})

callback(null, results);
*/
