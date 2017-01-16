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

// function selectElementsStartingWithVowel(array) {
//   var vowels = []
//   for(var i = 0; i < array.length; i++) {
//     if(array[i].charAt(0).match(/[aeiou]/)) {
//       vowels.push(array[i])
//     }
//   }
//   return vowels
// }


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
  array.splice(0, 3)
  return array
}

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
  array.sort(function(word1, word2) {
    return word1[word1.length - 1] > word2[word2.length - 1]
  })
  return array
}

// Question 9

function returnFirstHalfOfString(string) {
  var halfLength = Math.ceil(string.length / 2)
  return string.slice(0, halfLength)
}

// Question 10

function makeNumberNegative(number) {
  return number > 0 ? number = -number : number
}
