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
  const splitIntoChars = (code) => {
  const splittedCode = [];
  for (let i = 0; i < code.length; i += 10) {
    const decade = code.slice(i, i + 10);
    splittedCode.push(decade);
  }
  return splittedCode;
};
  
  const encodeToMorse = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
      const unit = str.slice(i, i + 2);
      if (unit === '10') result += '.';
      else result += '-';
    }
    return result;
  };
    
  const splitted = splitIntoChars(expr);
  return splitted.reduce((acc, value) => {
    if (value === '**********') return acc += ' ';
    if (value.startsWith('0')) value = value.slice(value.indexOf('1'));
    const toMorse = encodeToMorse(value);
    return acc += MORSE_TABLE[toMorse];
  }, '');
}

module.exports = {
    decode
}