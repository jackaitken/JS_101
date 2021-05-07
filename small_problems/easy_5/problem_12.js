/*
We need to write two functions:
  beforeMidnight
    which takes a time format in hh:mm and returns the number of minutes before
    midnight
  afterMidnight
    which takes a time format in hh:mm and returns the number of minutes after
    midnight

  Rules:
    pretty straightforward

  ALGORITHM (beforeMidnight):
    - we should split the input at the :
    - hours will be to the left, minutes to the right
    - we can set a constant MINUTES IN THE DAY to 1440
    - we can multiply the hours by 60 to get it's minute conversion
    - we can then add the minutes to get the total minutes
    - then we should return MINUTES IN THE DAY - total minutes
  
  afterMidnight will be the same save for our return which will just be the
  minutes

  We should create a helper function to do the heavy lifting of the calculation
  then we can return the appropriate value given the funciton invocation
*/

function calculateMinutes(time) {
  const MINUTES_IN_HOUR = 60;

  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3));

  let totalMinutes;
  if (!(hours && minutes)) {
    return 0;
  }

  totalMinutes = (hours * MINUTES_IN_HOUR) + minutes;
  return totalMinutes;
}

function afterMidnight(time) {
  const totalMinutes = calculateMinutes(time);
  return totalMinutes;
}

function beforeMidnight(time) {
  const MINUTES_IN_DAY = 1440;
  const totalMinutes = calculateMinutes(time);

  if (!totalMinutes) {
    return 0;
  }
  return MINUTES_IN_DAY - totalMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);