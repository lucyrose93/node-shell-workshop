#!usr/bin/env node

var fs = require('fs');
var path = require('path');


fs.readdir(process.cwd(), function(error, fileArray) {

  if (error) return error;

  var ex = process.argv.indexOf('-ex');

  if (ex !== -1 && process.argv[ex + 1]){

    var fileArray = fileArray.filter(function(file){
      var splitFile = file.split('.');
      return splitFile[splitFile.length-1] === process.argv[ex + 1];
    })
  }

  fileString = fileArray.join(', ');
  process.stdout.write( fileString + '\n');

})
