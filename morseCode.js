// The Morse code encodes every character as a sequence of "dots" and "dashes".
// For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
// The Morse code is case-insensitive, traditionally capital letters are used. 
// When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. 
// For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.
// //Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

let morseCode = '.... . -.--   .--- ..- -.. .';

decodeMorse = function(morseCode){
  let threeSpace = morseCode.split('   ')
  let conversion = []
  threeSpace.forEach(word => conversion.push(word.split(' ').map( letter  => MORSE_CODE[letter]).join('')))
 return conversion.join(' ')
 
 }
