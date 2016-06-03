//find consecutive series of number that adds up to value of answer

var arr = [1,2,1,1,1,1,2,2,2,1,2,2,1,1,1,2,1,1,1,2,2,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,1,2,1,2,1,1,1,1,2,1,1,1];
var answer = [[5],[7],[5]];
var verse = []
var i = 0

function find(format){
	var temp = []
	var num = 0 
	if(verse.length == answer.length){
		return verse
	}
	for (var j = Math.floor(Math.random() * arr.length); j < arr.length; j++){
		num += arr[j]
		temp.push(arr[j])
		if(num == answer[i][0]){
			verse.push(temp)
			i++
			return find(format)
		}
		if(num > answer[i][0]){
			temp = []
			i++
			return find(format)
		}
		
	
}
}
find(answer)