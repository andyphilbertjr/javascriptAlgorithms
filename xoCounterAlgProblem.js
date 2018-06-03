
function XO(str) {
	var strLowerCase = str.toLowerCase()
  var numOfX = 0
  var numOfO = 0
  for(let letter = 0; letter<=strLowerCase.length; letter++){
    if (strLowerCase[letter] === 'x'){
			numOfX++
    } else if (strLowerCase[letter] === 'o'){ 
    	numOfO++
      }
  }
 return numOfX == numOfO ? true : false
}
