import { Car } from "./Car.js";
import { Cat } from "./Cat.js";

// Excercise: functions & objects
// Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printed correctly.
const fullName = (firstName, lastName) => {
  console.log("FullName: ", firstName + " " + lastName);
  return firstName + " " + lastName;
};
fullName("Nikolett", "Dékány");

//Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.
function calculateRectangleArea(a, b) {
  return a * b;
}
console.log(calculateRectangleArea(3, 4));

// Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.
function calculateDistance(speed, time) {
  return speed * time;
}
console.log(`You have travelled ${calculateDistance(20, 0.5)} km`);

// Create an object called calculator with the name of the owner(eg. Yourname) and modify your code so the 3 previous functions are attached to the object.
const calculator = {
  owner: "Nikolett Dékány",
  getFullName: (firstName, lastName) => fullName(firstName, lastName),
  getRectangleArea: (a, b) => calculateRectangleArea(a, b),
  getDistance: (speed, time) => calculateDistance(speed, time),
};

console.log("Full name: ", calculator.getFullName("Nikolett", "Dékány"));
console.log("Rectangle area: ", calculator.getRectangleArea(5, 6));
console.log("Distance: ", calculator.getDistance(50, 0.5) + " km");

// Excercise Class
const cat1 = new Cat("Roland", "grey", "Siamese");
cat1.greet();

cat1.changeCatsName("Whiskers");

cat1.greet();

// Excercise Car
// Create two instances of the Car class with different make, model, and year values.
const car1 = new Car("Ferrari", "488 Spider", 2021);
const car2 = new Car("Ford", "Mustang GT", 2022);
// Call the getCarInfo, start, and stop methods on these instances and print the results to verify that everything works as expected.
car1.getCarInfo();
car2.getCarInfo();
car1.start();
car2.start();
car2.stop();
car1.stop();

// Excersise: Arrays
//Create an array with 5 names. Print out the first element (name) using console.log()
const names = ["Tessa", "Hardin", "Zed", "Landon", "Steph"];
console.log("First name of the names array is:", names[0]);

//Use the indexOf function to get the index of a name that exists in your array.
const indexOfLandon = names.indexOf("Landon");
console.log("Index of Landon: ", indexOfLandon);

//Try the indexOf function with a name that does not exist. What does it return?
const indexOfNoah = names.indexOf("Noah");
console.log("Index of Noah: ", indexOfNoah);

//Use the push function to add a new name to the array of names, so you have 6 names in the array. 'log' the array to verify.
names.push("Molly");
console.log('The array with a 6th name "Molly": ', names);

//Use the slice function on the array, to create a new array with the first 3 names. 'log' the array to verify.
const first3Name = names.slice(0, 3);
console.log("A new array with only the first 3 names: ", first3Name);

//Create 2 objects with firstname, lastname, email–values. Add the two objects to a new array. 'log' the array to verify.
const person1 = {
  firstname: "Ken",
  lastname: "Scott",
  email: "ken.scott@task.com",
};

const person2 = {
  firstname: "Tristan",
  lastname: "Maxwell",
  email: "tristan.maxwell@task.com",
};
const people = [person1, person2];
console.log("Array of people: ", people);

// Also 'log' the first objects' email in a separate 'log'.
console.log("First person's email is: ", people[0].email);

// Excercise: arrays & objects
// Student Grades Management
// Create a StudentObject: Define a Studentobject with properties: name, id, and grades(an array of numbers).

const Student = {
  name: "Ken",
  id: 123456,
  grades: [],
};

// AddGrades: Write a function named addGrade that takes a Student object and a grade (number) as parameters, and adds the grade to the student's grades array.
const addGrade = (Student, grade) => {
  Student.grades.push(grade);
};

// Update Student Name: Write a function named updateStudentName that takes a Student object and a new name as parameters and updates the student's name.
const updateStudentName = (Student, newName) => {
  Student.name = newName;
};
// Test the Functions: Create a student object.
// Add a few grades to the student.
addGrade(Student, 10);
addGrade(Student, 7);
addGrade(Student, 12);

console.log("Student with the added grades: ", Student);

// Update the student's name and print the updated object.
updateStudentName(Student, "Carla");

console.log("Updated student object with new name: ", Student);
