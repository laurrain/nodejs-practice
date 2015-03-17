	var fs = require('fs');
    var path = require('path');

module.exports = function (dir, filterStr, callback) {
  fs.readdir("/home/coder/node_modules", function (err, list) {
    if (err)
      return callback(err);

    list = list.filter(function (file) {
      return path.extname(file) === '.' + "js"; //filter;
    });

    callback(null, list);
  });
}


