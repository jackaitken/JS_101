let str = 'abbbba';

str.split('').forEach((_, index) => {
  console.log(str[index + 1]);
});