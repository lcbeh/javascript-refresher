// Question 21

function swapKeysAndValuesInObject(object) {
  var swapped = {}
  for(var key in object) {
    swapped[object[key]] = parseInt(key);
  }
  return swapped;
};


// Question 22

function addKeysAndValues(object) {
  var sum = 0;
  for(var key in object) {
    sum += parseInt(key) + object[key];
  }
  return sum;
};

// Question 23

function removeCapitalLettersFromString(string) {
  var removed = string.replace(/[^a-z\s]/g, '');
  return removed;
};

// Question 24

function everyPossiblePairing(array) {
  var pairs = [];
  for(var x = 0; x < array.length - 1; x++) {
    for(var y = 1; y < array.length; y++) {
      if(array[x] !== array[y]) {
        var pair = [array[x], array[y]];
        pairs.push(pair);
      }
    }
  }
  return pairs;
};

// Question 25

function roundUpNumber(number) {
  return Math.ceil(number);
};

// Question 26

function roundDownNumber(number) {

};

// Question 27

function formatDateNicely(date) {

  };

// Question 28

function getDomainNameFromEmailAddress(email) {

};

// Question 29

function titleizeString(string) {

};

// Question 30

function checkStringForSpecialCharacters(string) {

};
