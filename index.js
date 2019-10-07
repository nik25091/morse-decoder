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

function decode(expr) {n
    let b = expr.split('')
    let symArray = []
  
    for (let i = 0; i<b.length; i = i+2){
      let symbol = b[i]+b[i+1]
      if (symbol === '00') {
       symbol = ' ' 
      } else if (symbol === '10') {
       symbol = '.' 
      } else if (symbol === '11') {
       symbol = '-' 
      } else if (symbol === '**') {
        symbol = '**'
      }
      symArray.push(symbol)
    }
    
    let joined = symArray.join('')
    let someNewArray = []
    for (let j = 0; j<joined.length; j = j+5) {
      let someNewSymbol = joined[j] +
          joined[j+1] +
          joined[j+2] +
          joined[j+3] +
          joined[j+4]
      someNewArray.push(someNewSymbol)
    }

    let res = []
    someNewArray.forEach(el => {
      el = el.replace(/ /g, '')
      if(el !== '*****') {
        res.push(MORSE_TABLE[el])
      } else {
        res.push(' ')
      }
    })
    return res.join('').replace(/  /g, ' ')
}

module.exports = {
    decode
}