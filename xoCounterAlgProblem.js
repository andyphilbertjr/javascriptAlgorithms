//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. 
//The string can contain any char.

//Examples input/output:
//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false


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
