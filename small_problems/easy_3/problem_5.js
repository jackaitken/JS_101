let triangle = stars => {
  let spaces = stars - 1;

  for (let i = 1; i <= stars; i++) {
    console.log(`${' '.repeat(spaces)} ${'*'.repeat(i)}`);
    spaces -= 1;
  }
};

triangle(10);