module.exports = function toReadable (number) {
     const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
     const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     if (number === 0) {
         return 'zero'
       }
     if (number < 20) {
         return ones[number];
       }
     if (number < 100) {
         return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + ones[number % 10] : '');
       }
     if (number <1000 && number%100 === 0) {
          return ones[Math.floor(number/100)] + ' hundred'
     }
    if (number < 1000 ) {
         return ones[Math.floor(number / 100)] + ' hundred ' + (number % 100 !== 0 ? toReadable(number % 100) : '');
           }
      return 'Invalid numberber';
}


