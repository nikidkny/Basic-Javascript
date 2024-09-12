// Get the container element
const container = document.getElementById("numberList");

// Loop through numbers from 1 to 20
for (let i = 0; i <= 20; i++) {
  // Create a new div element for each number
  const listItem = document.createElement("div");
  listItem.textContent = i;
  listItem.classList.add("number");

  // Check if the number is even or odd and apply the appropriate class
  if (i % 2 === 0) {
    listItem.classList.add("even");
  } else listItem.classList.add("odd");
  // Append the new div to the container
  container.appendChild(listItem);

  // Add an event listener to highlight the number when clicked
  listItem.addEventListener("click", () => {
    // Remove highlight from all numbers
    if (listItem.classList.contains("highlight")) {
      listItem.classList.remove("highlight");
    } else {
      const allNumbers = document.querySelectorAll(".number");
      allNumbers.forEach((number) => {
        number.classList.remove("highlight");
      });
      // Add highlight to the clicked number
      listItem.classList.add("highlight");
    }
  });
}
