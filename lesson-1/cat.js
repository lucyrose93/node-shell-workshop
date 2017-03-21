#!/usr/bin/env node

var fs = require('fs');
var readStream = fs.createReadStream(process.argv[2], 'utf8');

// fs.readFile(process.argv[2], 'utf8', function(error, response){
//   if (error) return error;
//   process.stdout.write(response);
// });

readStream.on("data", function(chunk){
  process.stdout.write(chunk);
})

readStream.on("error", function(error){
throw error;
})

readStream.on("end", function(){
  process.stdout.write('\n');
})
