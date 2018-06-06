
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

//Write a function called repeatStr which repeats the given string string exactly n times.
//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let convertedString = s.toString()
  return convertedString.repeat(n)
  ;
}

//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '')
   
}
