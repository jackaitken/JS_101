/*
write a function that takes an integer representing minutes
and returns a string in 'hh:mm' format with the time conversion
of the integer input

Rules:
  we can't use the Date class methods
  positive numbers are numbers after midnight
  negative numbers are before midnight
  we can get a number greater than hours in the day (1440)

Main function ALGORITHM
  - we know that the minutes in the are 1440.
  - like we did with our bearing question we should get a helper
    to get the right minutes if it's over 1440, or less that -1440
  
*/

let timeOfDay = inputMinutes => {
  const MINUTES_IN_DAY = 1440;

  if (inputMinutes > MINUTES_IN_DAY) {
    inputMinutes = convertPositiveMinutes(inputMinutes);
  } else if (inputMinutes < MINUTES_IN_DAY) {
    inputMinutes = convertNegativeMinutes(inputMinutes);
  }

  let hours;
  let minutes;

  if (inputMinutes < 0) {
    [hours, minutes] = calculateNegativeTime(inputMinutes);
  } else {
    [hours, minutes] = calculatePositiveTime(inputMinutes);
  }

  hours = formatTime(hours);
  minutes = formatTime(minutes);

  return `${hours}:${minutes}`;

};

function convertPositiveMinutes(minutes) {
  const MINUTES_IN_DAY = 1440;

  while (minutes > MINUTES_IN_DAY) {
    minutes -= MINUTES_IN_DAY;
  }
  return minutes;
}

function convertNegativeMinutes(minutes) {
  const MINUTES_IN_DAY = 1440;

  while (minutes < -MINUTES_IN_DAY) {
    debugger;
    minutes += MINUTES_IN_DAY;
  }
  return minutes;
}

function calculatePositiveTime(inputMinutes) {
  const MINUTES_IN_HOUR = 60;

  let rawHours = inputMinutes / MINUTES_IN_HOUR;
  let hours = Math.trunc(rawHours);

  let minuteRemainder = rawHours - hours;
  let rawMinutes = minuteRemainder * MINUTES_IN_HOUR;
  let minutes = Math.trunc(rawMinutes);

  return [String(hours), String(minutes)];
}

function calculateNegativeTime(inputMinutes) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;

  inputMinutes = Math.abs(inputMinutes);

  let rawHours = inputMinutes / MINUTES_IN_HOUR;
  let trueHours = Math.trunc(rawHours);
  let ceiledHours = Math.ceil(rawHours);
  debugger;
  if (ceiledHours === 25) {
    ceiledHours -= 1;
  }

  let hours = HOURS_IN_DAY - ceiledHours;

  let minuteRemainder = rawHours - trueHours;
  let minutes = Math.ceil(minuteRemainder * MINUTES_IN_HOUR);
  minutes = MINUTES_IN_HOUR - minutes;

  return [String(hours), String(minutes)];

}

function formatTime(time) {
  return time.padStart(2, 0);
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

