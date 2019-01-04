//Your task is to write function findSum.
//Upto and including n, this function will return the sum of all multiples of 3 and 5.
//For example:
//findSum(5) should return 8 (3 + 5)
//findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)




function findSum( n ) {
  let numStoreArr = [];
  
  if( n < 3 ) return 0
  if( n === 3 ) return 3
  
  for( let i = n; i != 0; i-- ) {
    if(!(i%3) || !(i%5) ) {
      numStoreArr.push(i);
    }
  }
   return numStoreArr.reduce((cur,acc) => acc + cur );
}
