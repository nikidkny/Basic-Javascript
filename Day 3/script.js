// Excercise: loops & arrays

import Book from "./Book.js";

// Create an array of with the following values: 'Peter', 7, 'Marianne', true, 'Helle' and 8. Notice it is a mix of strings, numbers and a boolean.
const mixedArray = ["Peter", 7, "Marianne", true, "Helle", 8];

// Use a loop to iterate over the array and generate the following in the console:
// Peter is a string
// 7 is a number
// Marianne is a string
// true is a boolean
// Helle is a string
// 8 is a number
for (let i = 0; i < mixedArray.length; i++) {
  const value = mixedArray[i];
  const type = typeof value;
  console.log(`${value} is a ${type}`);
}
// can be done like this as well
// mixedArray.forEach((i) => {
//   console.log(`${i} is a ${typeof i}`);
// });
// Excercise: loops & objects
// Create an array of book objects, with title and author(where both are strings). Create 5 objects in the array.
const books = [
  new Book("Sarah J. Maas", "A Court of Wings and Ruin"),
  new Book("Kerstin Gier", "Sapphire blue"),
  new Book("Jennifer L. Armentrout", "Onyx"),
  //   new Book("Kami Garcia and Margaret Stohl", "Beautiful Creatures"),
  //   new Book("Jane Austen", "Pride and Prejudice"),
];

// Write javascript that loops over the array of book objects and createa new <li> for each book object and add the title and author to the <li> and insert it into the <ul>.
const bookList = document.getElementById("bookList");

books.forEach((book) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${book.title} by ${book.author}`;
  bookList.appendChild(listItem);
});

// Verify that it works with any number of objects by removing 2 of the 5 objects from the array and run it again.

// Excerices
// Create a function, findLargest, that takes 4 numbers as 4 parameters and returns the largest of the 4 numbers.

const findLargest = (num1, num2, num3, num4) => {
  return Math.max(num1, num2, num3, num4);
};
console.log(findLargest(12, 23, 45, 4567));

// Create a function that takes 3 numbers as 3 parameters. The first parameter is the number to check. The 2nd and 3rd parameter is a range (from and to). If the first parameter is within the range of the range it should return true and false ifnot.
const checkRange = (number, rangeStart, rangeEnd) => {
  if (rangeStart < number && number < rangeEnd) {
    console.log(`The number is within the range`);
  } else console.log(`The number is not within the range`);
};
checkRange(-2, 3, 6);
