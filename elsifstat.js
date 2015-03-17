
   var prompt = require('prompt');

   prompt.start();

   prompt.get('age', function (err, result) {
   	if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('age = ' + result.age);
    if(result.age < 10){
    console.log("You are under age");
   }else{
   	console.log("Welcome in my living room");
   }
  });

    function onErr(err) {
    console.log(err);
    return 1;
  }
	