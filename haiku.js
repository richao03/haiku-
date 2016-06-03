
  var answerArray = []
function parsing (file1, file2){
  var parsedList = []   
  var dictionarylist =[]                     //the string/file we will get our haiku vocabs from 
  var dictionary = file1.toString().split("\n")  //takes dictionary and splits it up 
  var booklist = file2.toString().toUpperCase().replace(/\W+/g, " ").split(" ")  //take sample text and uppercase and split it up               
  

  dictionary.forEach(function(line){                       //for each line of the dictionary
    dictionarylist.push(line.split("  ") )
    } )

  for (var i = 0; i < booklist.length; i++) {
    for (var j = 0; j < dictionarylist.length; j++) {
      if(booklist[i]==dictionarylist[j][0]){
        answerArray.push(dictionarylist[j])
        continue;
      }
    }
  }

for (var k = 0; k < answerArray.length; k++) {
  if(answerArray[k].length ===2){
answerArray[k].push((answerArray[k][1].match(/\d/g)||[]).length)
}
}

}
/*
function formatData(data){    	
answer = []											                //takes data and splits it in to an array of 
   var lines = data.toString().split("\n")			//words, phonemes, and syllables
   var lineSplit
   lines.forEach(function(line){    
   lineSplit = line.split(",");    
   lineSplit.push((lineSplit[1].match(/\d/g)||[]).length)   	//this pushes the number of syllables to lineSplit[2]
   answer.push(lineSplit[0] + " : " + lineSplit[2]); 		      //strings are pushed into answer array in the format 
   														 	                              //words:sylables 
  });
}
*/

function createHaiku(structure){ 
  
  for (var i = 0; i < structure.length; i++) {
    verse = ""
    console.log("\n")
    for (var l = 0; l < structure[i].length; l++) {
      for (var j = Math.floor(Math.random() * answerArray.length); j < answerArray.length; j++) {
        if(structure[i][l]== answerArray[j][2]){
            verse += answerArray[j][0] +" "
            l++
        } 
      }
    }
   console.log(verse)
  }
}


function randomnum(num) {
  var arr = []
  while (num > 0) {
    answer = Math.ceil(Math.random() * num)
    arr.push(answer)
    num -= answer
  }
  return arr;
}

/*
function createHaiku(structure){						       //structure will be an array of arrays
	for(var i = 0; i<structure.length; i ++){			   //check all values of the structure array
    for (var j = 0 ; j<answer.length; j++){		     //checks all syllable value of the data parsed
			if (structure[i] == answer[j].slice(-1)){		 //if syllables == structure array value
				console.log(answer[j].slice(0,-4))		     //log out only the word
        i++
		} 
  }
		}
	}
*/
module.exports.randomnum = randomnum
module.exports.createHaiku = createHaiku
module.exports.parsing = parsing

