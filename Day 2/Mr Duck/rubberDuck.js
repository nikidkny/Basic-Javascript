const logo = document.getElementById("logo");
const message = document.getElementById("message");
const messages = document.getElementById("messages");

// function to show the hidden message
const displayHidden = () => {
  message.classList.remove("hidden");
  message.classList.add("visible");
  console.log("Mr. Duck is watching you!");
};

// function to hide the displayed message
const hideDisplayed = () => {
  message.classList.remove("visible");
  message.classList.add("hidden");
};

logo.addEventListener("mouseover", displayHidden);
logo.addEventListener("mouseleave", hideDisplayed);

const textInput = document.getElementById("textInput");
const button = document.getElementById("button");

// function to load the previously saved messages from loaclstorage and show them
const loadMessages = () => {
  const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
  // Get and parse messages from localStorage, or use an empty array if it's empty
  savedMessages.forEach((msg) => {
    const msgElement = document.createElement("li");
    msgElement.textContent = msg;
    messages.appendChild(msgElement); // Append the list item to the messages div
  });
};

// function to add new message to array
const addMessage = () => {
  // get input value
  const inputValue = textInput.value;
  // check if input is empty
  if (inputValue.trim() !== "") {
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    // add new message to the array of saved messages
    savedMessages.push(inputValue);
    // save the updated messages to the localStroage
    localStorage.setItem("messages", JSON.stringify(savedMessages));
    const msgElement = document.createElement("li");
    msgElement.textContent = inputValue;
    messages.appendChild(msgElement);
    // Clear the text input field
    textInput.value = "";
  }
};

button.addEventListener("click", addMessage);
window.addEventListener("load", loadMessages);
