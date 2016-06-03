var fs = require("fs")
var haiku = require('./haiku');
var testfile = readtestfile('./test.txt');
var samplefile = readsamplefile('./sample.txt')

function readtestfile(file){
  return fs.readFileSync(file).toString();
}

function readsamplefile(file){
  return fs.readFileSync(file).toString();
}



haiku.parsing(testfile, samplefile)

haiku.createHaiku([haiku.randomnum(5),haiku.randomnum(7),haiku.randomnum(5)])
