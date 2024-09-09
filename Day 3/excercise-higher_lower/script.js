// Using if else and loops, create a javascript application that will
// 1. Randomly select a number between 1 and 100.
const randomNumber = Math.floor(Math.random() * 100) + 1;
// 2. Ask the user for a quess(between 1 and 100)
let attempts = 0;
const input = document.getElementById("userGuess");
const submitButton = document.getElementById("submitGuess");
const result = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");
console.log(randomNumber);
const handleGuess = () => {
  // Get the user's guess
  const userGuess = parseInt(input.value);

  // Check if the input is a valid number
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  // Add to the number of attempts
  attempts++;
  // 3. Let the user know if the quess is higher or lower than the randomly selected number, and ask for a new quess, if the quess was not correct.
  // 4. Let the user know that they guessed correctly and how many guesses they used, if the guess correctly.
  if (userGuess === randomNumber) {
    if (attempts === 1 && userGuess === randomNumber) {
      result.textContent = `🎉 You are awsome you guessed it in ${attempts} attempt! 🎉`;
    } else {
      result.textContent = `You got it! The number was ${randomNumber}.`;
      attemptsDisplay.textContent = `You guessed it in ${attempts} attempts!`;
    }
  } else if (userGuess < randomNumber) {
    result.textContent = "Too low! Try again.";
  } else {
    result.textContent = "Too high! Try again.";
  }

  if (attempts === 15 && userGuess !== randomNumber) {
    result.textContent = `You used too many attempts 😭! The number was ${randomNumber}.`;
  }
  // Clear input after each guess
  input.value = "";
};

// submit with enter or clicking the button
submitButton.addEventListener("click", handleGuess);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleGuess();
  }
});
