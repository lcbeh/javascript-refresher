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
  return array.concat(array)
};

// Question 17

function averageOfArray(array) {
  var sum = array.reduce(function (n1, n2) {
    return n1 + n2;
  }, 0)

  var average = sum / array.length;

  function isInt(average) {
    return average % 1 === 0;
  }

  if (isInt(average)) {
    return average
  }
  return parseFloat(average.toFixed(1));
};

// Question 18

function removeElementsGreaterThanFive(array) {
  function elementsUpToFive (number) {
    return number <= 5;
  }
  return array.filter(elementsUpToFive)
};

// Question 19

function convertArrayToObject(array) {
  var object = {}
  for(var i = 0; i < array.length; i++) {
    object[i] = array[i]
  }
  return object
};

// Question 20

function getLettersInArrayOfWords(array) {
  var letters = []
  array.forEach(function (word) {
    letters.push(word.split(''))
  })

  function concatArrays(arr1, arr2) {
    return arr1.concat(arr2)
  }

  return letters.reduce(concatArrays).sort()
};
