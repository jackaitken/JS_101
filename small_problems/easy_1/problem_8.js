/*
PEDAC

UNDERSTAND THE PROBLEM
  inputs and outputs
  make the requirements clear
  identify the rules
  mental model

EXAMPLES TEST CASES

DATA STRUCTURE

ALGORITHM

CODE

-------------------

P:

  INPUTS AND OUTPUTS:
    Input:
      Any number greater than 0
    Ouput:
      boolean true or false

  MAKE THE REQUIRMENTS CLEAR
    a leap year is defined as a year that is:
      evenly divisble by 4 unless,
      the year is also divisible by 100, then it's not a leap year
      unless that year is divisble by 400

  IDENTIFY THE RULES
    We can't take any year less than 0
    We can assume that the rule is true for every valid year

  MENTAL MODEL
    Given a number greater than 0 representing a year, determine if
    that year is a leap year given our rule.

E:
  EXAMPLES:
    Input:
      2017
    Output:
      false

    Input:
      2016
    Output:
      true

    Input:
      800
    Output:
      true // divisble by 400

D:
  DATA STRUCTURE
    This again is just going to be a straigh forward if statement
    or calculation. I can't see a reason to store any data.

A
  ALGORITHM
    - Given a year as input
    - First check if that year is divisble by 400
      - If so return true
    - Next check if that year is divisible by 100
      -If so return false
    - Next check if that year is divible by 4
      - If so return true
      - If not return false
*/

let isLeapYear = year => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
};

let newIsLeapYear = year => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};
console.log(newIsLeapYear(2016));      // true
console.log(newIsLeapYear(2015));      // false
console.log(newIsLeapYear(2100));      // false
console.log(newIsLeapYear(2400));      // true
console.log(newIsLeapYear(240000));    // true
console.log(newIsLeapYear(240001));    // false
console.log(newIsLeapYear(2000));      // true
console.log(newIsLeapYear(1900));      // false
console.log(newIsLeapYear(1752));      // true
console.log(newIsLeapYear(1700));      // false
console.log(newIsLeapYear(1));         // false
console.log(newIsLeapYear(100));       // false
console.log(newIsLeapYear(400));       // true