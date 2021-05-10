const swapName = name => {
  let splitName = name.split(' ');
  let last = splitName.pop();
  return `${last}, ${splitName.join(' ')}`;
};

console.log(swapName('Karl Oskar Henriksson Ragvals'));