const API_URL = "https://dummyjson.com/users";
const userContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");

let allUsers = [];

// Fetch users with async/await
async function fetchUsers() {
  try {
    loader.style.display = "block";
    const response = await fetch(API_URL);
    const data = await response.json();
    allUsers = data.users;
    displayUsers(allUsers);
  } catch (error) {
    userContainer.innerHTML = "<p style='color: red;'>Failed to load users. Please try again later.</p>";
    console.error("Error fetching users:", error);
  } finally {
    loader.style.display = "none";
  }
}

// Render user cards
function displayUsers(users) {
  userContainer.innerHTML = ""; // Clear before displaying new
  if (users.length === 0) {
    userContainer.innerHTML = "<p>No users found.</p>";
    return;
  }

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.firstName} ${user.lastName}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;
    userContainer.appendChild(card);
  });
}

// Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = allUsers.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm)
  );
  displayUsers(filteredUsers);
});

// Load data when page starts
fetchUsers();
