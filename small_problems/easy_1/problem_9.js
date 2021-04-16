/*
PEDAC
-------------
UNDERSTAND THE PROBLEM
  inputs and outputs:
    Input:
      a year greater than 0
    Ouput:
      boolean true or false

  make the requirements explicit:
    - in 1752 the British Empire adopted the Gregorian Calendar.
    - 1752 was a leap year.
    - Prior to this year they used the Julian Calendar.
    - In the Julian calendar leap years occur in any year that is
      evenly divisble by 4.
    - We need to update our function so that we can determine pre
      1752 if a year is a leap year.

  identify the rules:
    - same rules really apply to this problem as they did the last
    - we're changing our formula if the year given is 1751 or less

  mental model:
    - Given a year greater than 0, determine if that year is a leap
      year based on our rule, which states that a leap year before
      1752 must be divisble by 4, but after it must be either divisible
      by 4 and not 100 (unless it is divisble by 400).

EXAMPLES:
  Input:
    1752:
  Output:
    true

  Input:
    1500
  Output:
    true

DATA STRUCTURE
  NONE

ALGORITHM
  - First let's determine if the year is divisble by 400
    - If so we can return true
  - Next let's check if the year is divisble by 4
    - If so check if the year is less than 1752
      - If so return true
      - If not return year % 100 === 0
*/

let isLeapYear = year => {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0 ) {
    return false;
  } else {
    return year % 4 === 0;
  }
};

let newIsLeapYear = year => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0) {
    if (year < 1752) {
      return true;
    } else {
      return year % 100 !== 0;
    }
  } else {
    return false;
  }
};

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true
