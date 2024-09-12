const logo = document.getElementById("logo");
const hiddenMessage = document.getElementById("hiddenMessage");
const messages = document.getElementById("messages");

// Add Easter egg Hover effect on Mr. Duck
// function to show the hidden hiddenMessage
const displayHidden = () => {
  hiddenMessage.classList.remove("hidden");
  hiddenMessage.classList.add("visible");
  console.log("Mr. Duck is watching you!");
};

// function to hide the displayed hiddenMessage
const hideDisplayed = () => {
  hiddenMessage.classList.remove("visible");
  hiddenMessage.classList.add("hidden");
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
    messages.classList.remove("hidden");
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
    messages.classList.remove("hidden");
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

// add event listener when enter is pressed
textInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addMessage();
  }
});
button.addEventListener("click", addMessage);
window.addEventListener("load", loadMessages);
// window.localStorage.clear();
