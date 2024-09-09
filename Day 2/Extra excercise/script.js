const dropdown = document.getElementById("tvshows");
const list = document.querySelector("ul");

const addSelected = () => {
  const selectedValue = dropdown.value;
  if (selectedValue === "") return;
  const existingItem = document.querySelector(`li[data-value="${selectedValue}"]`);
  if (existingItem) {
    list.removeChild(existingItem);
  } else {
    const newItem = document.createElement("li");
    newItem.textContent = dropdown.options[dropdown.selectedIndex].text;
    newItem.setAttribute("data-value", selectedValue);
    list.appendChild(newItem);
  }
};

dropdown.addEventListener("change", addSelected);
