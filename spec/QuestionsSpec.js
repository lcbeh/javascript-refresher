describe('JavaScript Refresher Questions', function() {

  it('1. selectElementsStartingWithE: return elements from an array starting with the letter E', function() {
    testArray = ['emma', 'maya', 'ethan', 'liam', 'elise', 'jackson', 'samaire', ];
    expect(selectElementsStartingWithE(testArray)).toEqual(['emma', 'ethan', 'elise']);
  });

  it('2. selectElementsStartingWithVowel: return elements from an array starting with a vowel', function() {
    testArray = ['open', 'closed', 'small', 'also', 'ice', 'even'];
    expect(selectElementsStartingWithVowel(testArray)).toEqual(['open', 'also', 'ice', 'even']);
  });

  it('3. removeNullsFromArray: remove null elements and return array', function() {
    testArray = [null, null, true, false, 1, null, 2, 'x', null];
    expect(removeNullsFromArray(testArray)).toEqual([true, false, 1, 2, 'x']);
  });

  it('4. removeNullsAndFalseFromArray: remove null and false elements and return array', function() {
    testArray = [null, null, true, false, 1, null, 2, false, 'x', null];
    expect(removeNullsAndFalseFromArray(testArray)).toEqual([true, 1, 2, 'x']);
  });

  it('5. reverseEveryElementInArray: return array with each individual string element reversed', function() {
      testArray = ['coffee', 'tea', 'cake', 'brownie'];
      expect(reverseEveryElementInArray(testArray)).toEqual(['eeffoc', 'aet', 'ekac', 'einworb']);
  });

  it('6. dropFirstThreeElements: return array with first three elements removed', function() {
    testArray = [1,2,3,4,5,6]
    expect(dropFirstThreeElements(testArray)).toEqual([4,5,6]);
  });

  it('7. addElementToBeginningOfArray: add element to beginning of an array', function() {
      testArray = [1,2,3];
      newElement = 'a';
      expect(addElementToBeginningOfArray(testArray, newElement)).toEqual(['a',1,2,3]);
  });

  it('8. sortArrayByLastLetterOfEachWord: return array sorted by last letter of each string element', function() {
    testArray = ['oatmeal', 'coffee', 'toast', 'tea'];
    expect(sortArrayByLastLetterOfEachWord(testArray)).toEqual(['tea', 'coffee', 'oatmeal', 'toast'])
  });

  it('9. returnFirstHalfOfString: return first half of a string', function() {
      expect(returnFirstHalfOfString('coffee')).toEqual('cof');
      expect(returnFirstHalfOfString('water')).toEqual('wat');
  });

  it('10. makeNumberNegative: convert positive (or negative) number to a negative number', function() {
    expect(makeNumberNegative(5)).toEqual(-5);
    expect(makeNumberNegative(-3)).toEqual(-3);
  });

  it('11. separateArrayIntoEvenAndOddNumbers: return nested array with one array of even numbers, one array of odd numbers', function() {
    testArray = [1,2,3,4,5,6,7]
    expect(separateArrayIntoEvenAndOddNumbers(testArray)).toEqual([[2,4,6], [1,3,5,7]]);
  });

  it('12. numberOfElementsThatArePalindromes: return number of elements in an array that are palindromes', function() {
    testArray = ['pop', 'coffee', 'level', 'hello', 'wow'];
      expect(numberOfElementsThatArePalindromes(testArray)).toEqual(3);
  });

  it('13. shortestWordInArray: return shortest string in an array', function() {
      testArray = ['muffin', 'scone', 'tea', 'coffee', 'cafe', 'chocolate'];
      expect(shortestWordInArray(testArray)).toEqual('tea');
  });

  it('14. longestWordInArray: return longest string in an array', function() {
    testArray = ['muffin', 'scone', 'tea', 'coffee', 'cafe', 'chocolate'];
    expect(longestWordInArray(testArray)).toEqual('chocolate');
  });

  it('15. arrayTotal: return total of number elements in an array', function() {
    testArray = [1,3,5,9,10];
    expect(arrayTotal(testArray)).toEqual(28);
  });

  it('16. doubleArray: return duplicate of array within a single array and NOT sorted', function() {
    testArray = [1,2,3]
    expect(doubleArray(testArray)).toEqual([1,2,3,1,2,3]);
  });

  it('17. averageOfArray: return average of number elements within an array', function() {
    testArrayA = [8,5,17,24,1,5];
    testArrayB = [5,25,10];
    expect(averageOfArray(testArrayA)).toEqual(10);
    expect(averageOfArray(testArrayB)).toEqual(13.3);
  });

  it('18. removeElementsGreaterThanFive: return array with elements less than or equal to 5', function() {
    testArray = [1,2,6,8,3,4,1,6,10,5,22,4];
    expect(removeElementsGreaterThanFive(testArray)).toEqual([1,2,3,4,1,5,4]);
  });

  it('19. convertArrayToObject: convert an array into an object with index as the key', function() {
    testArray = ['a','b','c'];
    expect(convertArrayToObject(testArray)).toEqual({0: 'a', 1: 'b', 2:'c'});
  });

  it('20. getLettersInArrayOfWords: return array with letters of all words sorted in alphabetical order', function() {
    testArray = ['hi', 'bye', 'no', 'yes'];
    expect(getLettersInArrayOfWords(testArray)).toEqual(['b','e','e','h','i','n','o','s','y','y'])
  });

  it('21. swapKeysAndValuesInObject: return an object with key and values switched', function() {
    testObject = {1:'a', 2:'b', 3:'c'};
    expect(swapKeysAndValuesInObject(testObject)).toEqual({'a':1, 'b':2, 'c':3});
  });

  it('22. addKeysAndValues: return sum of numerical keys and values in object', function() {
      testObject = {1:2, 3:4, 5:6}
      expect(addKeysAndValues(testObject)).toEqual(21);
  });

  it('23. removeCapitalLettersFromString: return string with all capital letters removed', function() {
    testString = 'Coffee Please andThankYou';
    expect(removeCapitalLettersFromString(testString)).toEqual('offee lease andhankou')
  });

  xit('24. everyPossiblePairing: return multidimensional array with every possible pairing and no duplicates', function() {
    testArray = ['Emma', 'Samaire', 'Liam'];
    expect(everyPossiblePairing(testArray)).toEqual([['Emma', 'Samaire'], ['Emma', 'Liam'], ['Samaire', 'Liam']]);
  });

  it('25. roundUpNumber: round all decimal numbers up to the next whole number', function() {
      expect(roundUpNumber(3.5)).toEqual(4);
      expect(roundUpNumber(8.1623)).toEqual(9);
  });

  it('26. roundDownNumber: round all decimal numbers down to the previous whole number', function() {
    expect(roundDownNumber(3.5)).toEqual(3);
    expect(roundDownNumber(8.1623)).toEqual(8);
  });  

});
