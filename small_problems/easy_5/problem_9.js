let vehicles = vehicleArr => {
  let vehicleObj = vehicleArr.reduce((obj, elem) => {
    elem = elem.toLowerCase();
    obj[elem] ? obj[elem] += 1 : obj[elem] = 1;
    return obj;
  }, {});

  for (const [key, value] of Object.entries(vehicleObj)) {
    console.log(`${key} => ${value}`);
  }
};

vehicles([
  'car', 'car', 'truck', 'CAR', 'SUV',
  'truck', 'motorcycle', 'motorcycle',
  'car', 'truck'
]);