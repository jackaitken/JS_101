let animal = {
  bear: 'grizzly',
  fish: 'salmon',
  dog: 'golden retriever'
};

console.log(Object.values(animal).some(value => value.length > 50));