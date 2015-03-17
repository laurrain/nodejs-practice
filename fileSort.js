var fs = require('fs');
//var path = require('path');

fs.readdir('/home/coder/node_modules/list.csv', function (err, data) {
  //list.forEach(function (data) {
  	//var array = [];
  	 if (err) {
        		return console.log(err);
     		}
  	
  	  for(i in data) {
        console.log(data[i]);
    }
//});

  		console.log(data);
  	
    //if (path.extname(data) === '.' + process.argv[3])
      
  //});
});