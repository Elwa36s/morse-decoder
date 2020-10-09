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
    let array = [];
    let i = 0;
    let word = [];
    let result = "";
    for (let j = 10; j <= expr.length; j += 10) {
        array.push(expr.slice(i, j));
        i += 10;
    }
    for (let j = 0; j < array.length; j++) {
        let letter = array[j].toString();
        let str = '';
        if (letter === '**********') str += ' ';
        for (let k = 0; k <= 8; k += 2) {
            let symb = letter[k] + letter[k + 1];
            if (symb === '10') {
                str += '.';
            }
            if (symb === '11') {
                str += '-';
            }
        }
        word.push(str);
    }
    for (let j = 0; j < word.length; j++) {
        let morseCode = word[j];
        if (morseCode === ' ') {
            result += ' ';
        } else {
        result += MORSE_TABLE[morseCode];
     }
    }
    return result;
}

module.exports = {
    decode
}