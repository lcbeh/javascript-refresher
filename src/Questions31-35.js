// Question 31

function getUpperLimitOfRange(range) {
  return Math.max(...range);
};
// or:
// return Math.max.apply(null, range);

// Question 32

function squareRootOf(number) {
  return Math.sqrt(number);
};

// Question 33

function callMethodFromString(string) {

};

// Question 34

function isA2015BankHoliday(date) {
  var bankHolidays = [new Date(2015, 01, 01), new Date(2015, 04, 03), new Date(2015, 04, 06), new Date(2015, 05, 04), new Date(2015, 05, 25), new Date(2015, 08, 31), new Date(2015, 12, 25), new Date(2015, 12, 28)]


  function isBankHoliday(aDate) {
    return date.getTime() == aDate.getTime();
  }
  return bankHolidays.some(isBankHoliday);
};

function convertToRomanNumerals(number) {
  var romansTo10 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  var romansTo100 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']

  var numberArray = number.toString().split('')
  if (number <= 10) {
    return romansTo10[number];
  } else {
    return romansTo100[numberArray[0]] + romansTo10[numberArray[1]];
    }
}
