//Build Tower
//Build Tower by the following given argument:
//number of floors (integer and always greater than 0).

//Tower block is represented as *

//Python: return a list;
//JavaScript: returns an Array;
//C#: returns a string[];
//PHP: returns an array;
//C++: returns a vector<string>;
//Haskell: returns a [String];
//Ruby: returns an Array;
//Lua: returns a Table;
//Have fun!

function towerBuilder(nFloors) {
  let tower = []
  let element = ''
  let spacer = ' '
  let count = nFloors * nFloors

  for(let i = 0; i <= count; i++ ){
    if(element.length % 2 && tower.length + 1 <= nFloors){
      tower.push(element)
    }
    element += '*'
  }
  
  for(let i = 0; i <= tower.length - 1; i++) {
    if( i != tower.length - 1 ){
      let floorArr = tower[i].split('')
      for ( let j = nFloors - 1; j > i; j--){
        floorArr.push(spacer)
        floorArr.unshift(spacer)
      }
    tower[i] = floorArr.join('')
    }
  }
  return tower
}
