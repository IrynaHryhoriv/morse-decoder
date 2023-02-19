const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    arr = [];

    for (let i = 0; i < expr.length; i += 10) {
      arr.push(expr.substr(i, 10));
    }
  
    return arr
      .map(
        element =>
          (element = element
            .slice(element.indexOf(1), element.length)
            .replace(/10/g, '.')
            .replace(/11/g, '-'))
      )
      .map(element => {
        if (element === '*') return (element = ' ');
        return (element = MORSE_TABLE[element]);
      })
      .join('');
  }

module.exports = {
    decode
}