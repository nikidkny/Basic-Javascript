// Create a Cat class with name, color, breed.
export class Cat {
  // Create a constructor that takes 3 parameters to create an object with name, color, breed.
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }
  // Create a function/method that returns the cat's data.
  greet() {
    console.log("My cat's name is " + this.name + " and it is a " + this.color + " " + this.breed);
  }
  // Create a function that can change the cat's name.
  changeCatsName(newName) {
    this.name = newName;
  }
}
