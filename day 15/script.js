// 1. Button Click Counter
let count = 0;
document.getElementById("clickBtn").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});

// 2. Image Hover Effect
const img = document.getElementById("hoverImage");
img.addEventListener("mouseover", () => img.style.transform = "scale(1.1)");
img.addEventListener("mouseout", () => img.style.transform = "scale(1)");

// 3. Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("username").value.trim();
  if (name === "") {
    alert("Please enter your name.");
  } else {
    alert(`Welcome, ${name}!`);
  }
});

// 4. Live Search Filter
document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const items = document.querySelectorAll("#items li");
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(searchTerm) ? "block" : "none";
  });
});

// 5. Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    alert("You triggered Ctrl + S shortcut!");
  }
});

// 6. Scroll Event - Back to Top
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
