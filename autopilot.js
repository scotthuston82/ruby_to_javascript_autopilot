var getNewCar = {
  city: 'Toronto',
  passengers: 0,
  gas: 100
}
function addCar(cars, newCar) {
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now" + cars.length ".";
}
