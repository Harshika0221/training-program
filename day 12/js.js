// Get references to DOM elements
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

// Counter for new items
let count = 2;

// Event listener for button click
addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${count++}`;
  itemList.appendChild(newItem);
});
