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