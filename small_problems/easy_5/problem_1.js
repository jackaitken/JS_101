/*
input:
  a floating point number that represents an angle greater than 0
  and less than 360.
output:
  a string the represents the input angle in degrees, minutes, and seconds

EXAMPLES/TEST CASES
  input:
    30
  output:
    30˚00'00"

  input:
    76.73
  output:
    76°43'48"

Rules:
  - there are 60 minutes in a degree
  - there are 60 seconds in a minute.
  - the degrees should be notated with a ° symbol after the number
  - the minutes should be notated with a '
  - the seconds should be notated with a "

we'll need to do some calculation on the floating point number.
based on the test cases we can see that the degrees are always the same
number as the number on the left side of the decimal point.

so:
  input:
    93.034773
  output:
    93°02'05"

really what we need to do is calculate the minutes and seconds.
so 255.5 would give us 255°30'00"

To get our degrees, we simply use the number to the left of the decimal
to get our minutes we multiply the digits to the right of the decimal by 60
then to get our seconds we multiply the numbers to the right of that result's
decimal by 60

166.7547 = 166°
.7547 * 60 = 45.282 (45')
.282 * 60 = 16.92 (16")

166°45'16"

Another rule that I've left out is that even if we have a single digit
representation of one of our parts of the result, it needs to have a leading 0.


ALGORITHM:
  - we'll declare 3 variables, degrees, minutes, and seconds
  - we'll take the floor of the entire input and get our degrees
  - Then we will take all the numbers from the right of our decimal and
    multiply by 60 to get our minutes
  - Then again we'll take the numbers to the right of the decimal and multiply
    by 60 to get our seconds
  - Then we can use a template literal to log out our result.
*/

let dms = angle => {
  const HOUR_MINUTE_FORMULA = 60;
  let degrees = Math.floor(angle);

  let stringHours = String(angle);
  let hoursOperand = stringHours.slice(stringHours.indexOf('.'));
  let numHours = Number(hoursOperand).toFixed(2);
  let hours = Math.trunc(numHours * HOUR_MINUTE_FORMULA);

  let minutesOperand = stringHours.slice(stringHours.indexOf('.'));
  let numMinutes = Number(minutesOperand).toFixed(2);
  let minutes = Math.trunc(numMinutes * HOUR_MINUTE_FORMULA);

  console.log(`${degrees}˚${minutes}'${hours}"`);
};

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"