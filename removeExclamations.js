//Description:
//Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
//Examples
//remove("Hi!") === "Hi"
//remove("Hi!!!") === "Hi!!"
//remove("!Hi") === "!Hi"
//remove("!Hi!") === "!Hi"
//remove("Hi! Hi!") === "Hi! Hi"
//remove("Hi") === "Hi"

function remove(s){
  //coding and coding....
  let convertStringToArray = s.split("")
  for (charInArray in convertStringToArray){
    if (convertStringToArray.lastIndexOf('!') === convertStringToArray.length - 1){
        convertStringToArray.pop()
        return convertStringToArray.join('')
        } else {
          return convertStringToArray.join('')
        }
    }
}
