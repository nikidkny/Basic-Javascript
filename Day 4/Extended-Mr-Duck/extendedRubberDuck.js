const logo = document.getElementById("logo");
const hiddenMessage = document.getElementById("hiddenMessage");
const messages = document.getElementById("messages");
const welcomeMessage = document.getElementById("welcomeMessage");
const deleteButton = document.getElementById("deleteButton");

// function to show the hidden message
const displayHidden = () => {
  hiddenMessage.classList.remove("hidden");
  hiddenMessage.classList.add("visible");
  console.log("Mr. Duck is watching you!");
};

// function to hide the displayed message
const hideDisplayed = () => {
  hiddenMessage.classList.remove("visible");
  hiddenMessage.classList.add("hidden");
  console.log("Mr. Duck is hiding now!");
};
if (logo) {
  logo.addEventListener("mouseover", displayHidden);
  logo.addEventListener("mouseleave", hideDisplayed);
}

const textInput = document.getElementById("textInput");
const sendButton = document.getElementById("sendButton");

// Form validation
const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

if (form)
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const validateUsername = () => {
      if (username.value === "") {
        alert("Username is required");
        return false;
      } else if (username.value.length < 4 || username.value.length > 15) {
        alert("Username must be between 4 and 15 characters");
        return false;
      }
      return true;
    };
    const validateEmail = () => {
      if (email.value === "") {
        alert("Email is required");
        return false;
      } else if (!email.value.includes("@cphbusiness.dk")) {
        alert("Email must be a CPH email");
        return false;
      }
      return true;
    };
    const validatePassword = () => {
      if (password.value === "") {
        alert("Password is required");
        return false;
      } else if (
        password.value.length < 8 ||
        password.value.length > 20 ||
        !password.value.match(/[A-Z]/) ||
        !password.value.match(/[0-9]/) ||
        !password.value.match(/[^a-zA-Z0-9]/)
      ) {
        alert(
          "Password must be between 8 and 20 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        );
        return false;
      }
      return true;
    };
    // only submit if all 3 functions return true
    if (validateUsername() && validateEmail() && validatePassword()) {
      // add the usrname to local storage
      localStorage.setItem("username", username.value);
      alert("Yay! You becme a member of the duck family!");
      // go back to extendedRubberDuck.html
      window.location.href = "extendedRubberDuck.html";
    }
  });

const getUserName = () => {
  //   const userName = prompt("Please enter your name");
  //   welcomeMessage.textContent = `Heeey ${userName}!`;
  //   // make sure it has valid value
  //   if (userName.trim() === "") {
  //     getUserName();
  //   }
  // get username from local storage
  const savedUsername = localStorage.getItem("username");
  if (savedUsername && welcomeMessage) {
    welcomeMessage.textContent = `Heeey ${savedUsername}!`;
  }
};

// function to load the previously saved messages from loaclstorage and show them
const loadMessages = () => {
  const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
  // Get and parse messages from localStorage, or use an empty array if it's empty
  // use the message object to store the message and the date and time
  savedMessages.forEach((msg) => {
    messages.classList.remove("hidden");
    const msgElement = document.createElement("li");
    // Get the date and time from the title attribute for messages in the local storage
    console.log(msg);
    msgElement.title = msg.title;
    // Update the text content to use the message property
    msgElement.textContent = msg.message;
    // Append the list item to the messages div
    messages.appendChild(msgElement);
  });
};

// function to add new message to array that message should be the message object
const addMessage = () => {
  // get input value
  // add profanity filter so whenever the user types something, that input is checked, by some simple string matching, and discarded if it contains foul language
  const profanity = ["foulword", "badword", "cursing", "swearing", "badlanguage"];
  if (profanity.includes(textInput.value.toLowerCase())) {
    alert("Please keep it clean!");
    textInput.value = "";
    return;
  }
  const inputValue = textInput.value;
  // check if input is empty
  if (inputValue.trim() !== "") {
    messages.classList.remove("hidden");
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    // create a new message object with the input value and current date and time
    const newMessage = {
      title: formattedDate,
      message: inputValue,
    };
    // add new message to the array of saved messages
    savedMessages.push(newMessage);
    // save the updated messages to the localStroage
    localStorage.setItem("messages", JSON.stringify(savedMessages));
    const msgElement = document.createElement("li");

    // Get the current date and time for title attribute
    msgElement.title = formattedDate;
    // Set the text content of the list item to the input value
    msgElement.textContent = inputValue;
    messages.appendChild(msgElement);
    // Clear the text input field
    textInput.value = "";
  }
};
const checkUserAndSendMessage = () => {
  // check if the user has filled out the form
  const savedUsername = localStorage.getItem("username");
  // if yes add the message
  if (savedUsername) {
    addMessage();
  } else {
    //if not take them to the form page
    window.location.href = "user.html";
  }
};
if (deleteButton)
  deleteButton.addEventListener("click", () => {
    localStorage.removeItem("messages");
    messages.classList.add("hidden");
  });
if (textInput)
  // add event listener when enter is pressed
  textInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addMessage();
    }
  });

const forceButton = document.getElementById("forceAnswer");

// fetch jokes
const fetchJoke = async () => {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  );
  const data = await response.json();
  return data;
};
if (forceButton)
  // on click get a joke, delayed and add it to the same list as the messages
  forceButton.addEventListener("click", async () => {
    // add the delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const joke = await fetchJoke();
    // a joke object could be a setup and delivery or a joke
    const jokeText = joke.setup ? `${joke.setup} ${joke.delivery}` : joke.joke;
    textInput.value = jokeText;
    addMessage();
  });
if (sendButton) sendButton.addEventListener("click", checkUserAndSendMessage);
window.addEventListener("load", getUserName);
if (messages) window.addEventListener("load", loadMessages);

// window.localStorage.clear();
