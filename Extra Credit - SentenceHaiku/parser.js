var fs = require("fs");
var testfile = readtestfile('./test.txt');

function readtestfile(file){
  return fs.readFileSync(file).toString();
}


function formatData(data){    
	console.log(data)
   var lines = data.toString().split("\n")
   var lineSplit
   lines.forEach(function(line){    
   lineSplit = line.split("  ");    
   lineSplit.push((lineSplit[1].match(/\d/g)||[]).length) //this pushes the number of syllables to lineSplit[2]
   console.log("The word " + lineSplit[0] + " has this phoneme layout: " + lineSplit[1] + " " + lineSplit[2] + " syllables"); 
  });


}

formatData(testfile);

module.exports.formatData = formatData;
