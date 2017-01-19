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
  return Math.floor(number);
};

// Question 27

function formatDateNicely(date) {
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = date.getDate()
  var month = date.getMonth()
  var year = date.getFullYear()

  return day + '-' + monthNames[month] + '-' + year;
};

// Question 28

function getDomainNameFromEmailAddress(email) {
  var domainName = email.split('@')[1];
  domainName = domainName.split('.')[0];
  return domainName;
};

// Question 29

function titleizeString(string) {

  var wordArray = string.split(' ')
  var titleizeString = wordArray.map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1);
  })
  return titleizeString.join(' ');
};

// Question 30

function checkStringForSpecialCharacters(string) {
  return string.match(/\W/) ? true : false;
};
