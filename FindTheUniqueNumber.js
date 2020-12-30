//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.
//The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let uniqueNumber;
  let compareNumbers = createNumberMap(arr)
  
  for(let number in compareNumbers){

    if(compareNumbers[number] === 1){
      uniqueNumber = parseFloat(number)
    }  
  }
  
  return uniqueNumber
}

function createNumberMap(arr){
  let numberMap = {}
  
  for (let number of arr){
    numberMap[number] = numberMap[number] + 1 || 1
  }
  
  return numberMap
}
