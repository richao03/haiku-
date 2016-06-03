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

haiku.createHaiku([[5],[7],[5]])
