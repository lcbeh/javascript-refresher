// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
  var odd = [];
  var even = [];
  array.forEach(function (number) {
    number % 2 === 0 ? even.push(number) : odd.push(number)
  })
  return [even, odd]
}

// Question 12

function numberOfElementsThatArePalindromes(array) {
  var palindromes = []
  array.forEach(function (word) {
    var reversedWord = word.split('').reverse().join('')
    if (word === reversedWord) {
      palindromes.push(word)
    }
  })
  return palindromes.length
}

// Question 13

function shortestWordInArray(array) {
  array.sort(function (word1, word2) {
    return word1.length > word2.length
  })
  return array.shift()
};

// Question 14

function longestWordInArray(array) {
  array.sort(function (word1, word2) {
    return word1.length > word2.length
  })
  return array.pop()
}

// Question 15

function arrayTotal(array) {
    var sum = array.reduce(function (a, b) {
    return a + b
  }, 0)
  return sum
}

// Question 16

function doubleArray(array) {

};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {

};

// Question 20

function getLettersInArrayOfWords(array) {

};
