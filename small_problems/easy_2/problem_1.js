/*
understand the problem
  input:
    1. an arrray
       consisting of 2 or more elements that when combined with spaces, will
       produce a person's name
    2. an object
       consitsting of two keys only: 'title' and 'occupation', each with values
  output:
      a string greeting 'Hello first last! Nice to have a title occupation
      around'

  make the requirement explicit
    1. We could get numerous strings within our first array argument. We need
       to plan for that.

  identify the rules:
    - we need to work with both an array of strings and an object.
    - it will probably be best to return a format string and insert the
      proper values

  mental model:
    - Given an array of strings representing a name and an object containing
      the person's title and occupation, return a string that extracts those
      values to greet them properly.

examples

  Input:
    ['Arlo', 'Aitken'], {title: 'professional' occupation: 'napper'}
  Output:
    Hello, Arlo Aitken! Nice to have a professional napper around!

data structure

  while we need to accept an array and an object, I don't think we'll need to
  use any specific data structure. We can just return the formatted string.

algorithm

  - Join the array on spaces and set as name
  - Extract the object with object destructuring and save as title and 
    occupation
  - return the formatted string
*/

let greetings = (arr, obj) => {
  let name = arr.join(' ');

  const {title, occupation} = obj;

  return `Hello, ${name}! Nice to have a ${title} ${occupation} around`;
};

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });