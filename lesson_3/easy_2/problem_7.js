let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

Object.entries(flintstones).filter(
  pair => pair[0] === 'Barney').shift();

/*
This takes the entries from the flintstones object and turns them into an
array. Then we use the filter array to get the key value pair and check
if the first element in the pair (the key) is equal to Barney.
*/