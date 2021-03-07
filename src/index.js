module.exports = function toReadable (number) {
  const stringNumber = number.toString();
  const lessHundred = +stringNumber.slice(-2);
  const zeroNineteen= {
        0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
    };
    const eqTen= {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'

    };

    if(number < 20) {
      return zeroNineteen[number]
    }

if(number<100) {
      return number%10 ? eqTen[stringNumber[0]] + ' ' + zeroNineteen[stringNumber[1]] : eqTen[stringNumber[0]];
}

if (number>99 && number <1000) {

if (!(number%100)) return zeroNineteen[stringNumber[0]] + ' hundred';

    if(lessHundred < 20) {
        return zeroNineteen[stringNumber[0]] + ' hundred ' + zeroNineteen[lessHundred]
    }

    if(lessHundred < 100) {
        if(lessHundred%10) return zeroNineteen[stringNumber[0]] + ' hundred ' + eqTen[String(lessHundred)[0]] + ' ' +
        zeroNineteen[String(lessHundred)[1]];

         return zeroNineteen[stringNumber[0]] + ' hundred ' + eqTen[String(lessHundred)[0]];
    }
}

};

