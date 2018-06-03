//Implement a function that adds two numbers together and returns their sum in binary. 
//The conversion can be done before, or after the addition.
//The binary number returned should be a string.




function addBinary(a,b) {
  let sumOfNum = a + b
  let binaryNumToConv = sumOfNum%2
  let divisor = function(currentDivisableNum){
        sumOfNum = currentDivisableNum/2
        binaryNumToConv = currentDivisableNum%2
        return sumOfNum && binaryNumToConv
  } 
  let binaryNumArray = []
  while(sumOfNum >= 1){
    if(binaryNumToConv.toFixed() >= 1){
      binaryNumArray.push(1)
    }else{
      binaryNumArray.push(0)
    }

    divisor(sumOfNum)
  }
  return binaryNumArray.reverse().concat().join('')
}
