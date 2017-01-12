// Question 1

function selectElementsStartingWithE(array) {
  var elementsStartingWithE = []
  array.forEach(function (element) {
    if (element[0] === 'e') elementsStartingWithE.push(element)
  })
  return elementsStartingWithE
}

// Question 2 - using filter method

function selectElementsStartingWithVowel(array) {
  function startingWithVowel(element) {
    return element[0] === 'a' || element[0] === 'e' || element[0] === 'i' || element[0] === 'o' || element[0] === 'u'
  }
  return array.filter(startingWithVowel)
}

// Question 2 - using push methods

//function selectElementsStartingWithVowel(array) {
  // var elementsStartingWithVowel = []
  // array.forEach(function (element) {
  //   if (element[0] === 'a' || element[0] === 'e' || element[0] === 'i' || element[0] === 'o' || element[0] === 'u') {
  //     elementsStartingWithVowel.push(element)
  //   }
  // })
  // return elementsStartingWithVowel
//}

// Question 3

function removeNullsFromArray(array) {
  var validElements = []
  array.forEach(function (element) {
    if (element !== null) validElements.push(element)
  })
  return validElements
}

// Question 4

function removeNullsAndFalseFromArray(array) {
  var validElements = []
  array.forEach(function (element) {
    if (element) validElements.push(element)
  })
  return validElements
}

// Question 5

function reverseEveryElementInArray(array) {
  var reversed = []
  array.forEach(function (string) {
    var reversedString = string.split('').reverse().join('')
    reversed.push(reversedString)
  })
  return reversed
}

// Question 6

function dropFirstThreeElements(array) {

};

// Question 7

function addElementToBeginningOfArray(array, element) {

};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {

};

// Question 9

function returnFirstHalfOfString(string) {

};

// Question 10

function makeNumberNegative(number) {

};
