#!/usr/bin/env node

var fs = require('fs');
var readStream = fs.createReadStream(process.argv[2], 'utf8');


var redirect = process.argv.indexOf(">>");


if (redirect !== -1 && process.argv[redirect + 1]) {
  console.log('working', process.argv[redirect + 1]);
  var writeStream = fs.createWriteStream(process.argv[redirect + 1], {flags: 'a', defaultEncoding: 'utf8'});
  readStream.pipe(writeStream);
}
