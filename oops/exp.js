class vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends vehicle {
  start() {
    console.log("Car started");
  }
}

class ElectricCar extends Car {
  start() {
    console.log("Electric Car started");
  }
}
let myCar = new ElectricCar();
myCar.start(); // ?
// Output: Electric Car started
