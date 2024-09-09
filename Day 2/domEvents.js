const button = document.getElementById("button");
const message = document.getElementById("message");

// console.log(document.getElementById("button"));

const showMessage = () => {
  message.classList.remove("hidden");
  message.classList.add("visible");
};

const hideMessage = () => {
  message.classList.remove("visible");
  message.classList.add("hidden");
};
button.addEventListener("mouseover", showMessage);
button.addEventListener("mouseleave", hideMessage);
