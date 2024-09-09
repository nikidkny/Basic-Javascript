// Create a class named Car.
export class Car {
  // Create a constructor that takes 3 parameters to create an object with make, model, year.
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }
  // Create a function/method that returns the car's data.
  getCarInfo() {
    console.log("The car is a " + this.year + " " + this.make + " " + this.model);
  }
  // Create a method that sets a property called isRunning to true and retruns a string indicating that the car has started
  start() {
    this.isRunning = true;
    console.log(`The ${this.make} ${this.model} has started.`);
  }
  // Create a method that sets a property called isRunning to false and retruns a string indicating that the car has stopped
  stop() {
    this.isRunning = false;
    console.log(`The ${this.make} ${this.model} has stopped.`);
  }
}
