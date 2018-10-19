
let morseCode = '.... . -.--   .--- ..- -.. .';

decodeMorse = function(morseCode){
  let threeSpace = morseCode.split('   ')
  let conversion = []
  threeSpace.forEach(word => conversion.push(word.split(' ').map( letter  => MORSE_CODE[letter]).join('')))
 return conversion.join(' ')
 
 }
