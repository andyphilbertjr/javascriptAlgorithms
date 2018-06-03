'use strict'
//you are asked to square every digit of a number.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let newSquaredNumArray = [];
        //turn number to string
      let turnNumToString = num.toString()
      //splitstring to and array
      let turnNumStringToArray = turnNumToString.split("")
      //create a loop that will:
      for (let numItem of turnNumStringToArray){
      //convert each item in array to a number
      let eachNumItemBackToNumber  = Number.parseInt(numItem);
      // squared each item in array by 2 
      let squaredNumItem = Math.pow(numItem, 2);
      // push squared number to a new array
      newSquaredNumArray.push(squaredNumItem);
      }
      //join the array and convert back to a interger
      let combinedSquaredDigits =  newSquaredNumArray.join('')
      let squaredDigit = Number.parseInt(combinedSquaredDigits)
  
      console.log(squaredDigit)
    }
  
    squareDigits(6666)
    squareDigits(8888)

//Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

//Your mission: 
//Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

//A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  // check if coupon is valid
        if (enteredCode === correctCode){
          //parse date from string to comparable representation 
          let convertedCurrentDate = Date.parse(currentDate);
          let convertedExpirationDate = Date.parse(expirationDate);
          //if it is valid check expiration date 
          if (convertedExpirationDate >= convertedCurrentDate ){
          //return true 
            return true
          } else {
            return false
          }
        } else {
          //else return false 
            return false;
        }
}
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
