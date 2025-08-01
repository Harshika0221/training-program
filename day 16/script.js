// 1️ Promise Creation and Chaining
function basicPromise(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve("✅ Promise resolved!");
      else reject("❌ Promise rejected!");
    }, 1000);
  });
}

basicPromise(true)
  .then(res => {
    console.log("Then 1:", res);
    return "🧩 Chained result";
  })
  .then(res => console.log("Then 2:", res))
  .catch(err => console.error("Error:", err));

// 2️ Promise.all and Promise.race
let p1 = new Promise(resolve => setTimeout(() => resolve("P1 ✅"), 1000));
let p2 = new Promise(resolve => setTimeout(() => resolve("P2 ✅"), 500));
let p3 = new Promise(resolve => setTimeout(() => resolve("P3 ✅"), 1500));

Promise.all([p1, p2, p3]).then(results => console.log("Promise.all:", results));
Promise.race([p1, p2, p3]).then(first => console.log("Promise.race:", first));

// 3️ Async/Await with Try-Catch
async function asyncDemo() {
  try {
    let result = await basicPromise(true);
    console.log("Async/Await result:", result);
  } catch (error) {
    console.error("Caught by try/catch:", error);
  }
}
asyncDemo();

// 4️ XMLHttpRequest Example
function getPostXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("XMLHttpRequest Data:", JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}
getPostXMLHttpRequest();

// 5️ Fetch API Example
function getPostFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then(res => res.json())
    .then(data => console.log("Fetch API Data:", data))
    .catch(err => console.error("Fetch error:", err));
}
getPostFetch();

// 6️ Callback Hell vs Promises vs Async/Await (Simulated Functions)
function getUserId(callback) {
  setTimeout(() => callback(101), 1000);
}

function getUserDetails(id, callback) {
  setTimeout(() => callback({ id, name: "Harshika" }), 1000);
}

function callbackHellDemo() {
  getUserId(id => {
    getUserDetails(id, user => {
      console.log("❗Callback Hell Result:", user);
    });
  });
}
callbackHellDemo();

// Promises Version
function getUserIdP() {
  return new Promise(resolve => setTimeout(() => resolve(101), 1000));
}
function getUserDetailsP(id) {
  return new Promise(resolve => setTimeout(() => resolve({ id, name: "Harshika" }), 1000));
}
getUserIdP()
  .then(getUserDetailsP)
  .then(user => console.log("✅ Promise Chain Result:", user));

// Async/Await Version
async function cleanAsyncDemo() {
  let id = await getUserIdP();
  let user = await getUserDetailsP(id);
  console.log("✅ Async/Await Result:", user);
}
cleanAsyncDemo();

// 7️⃣ Public API Fetch Example (GitHub)
async function fetchGitHubUser(username = "octocat") {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let userData = await response.json();
    console.log(`🌐 GitHub API (${username}):`, userData);
  } catch (error) {
    console.error("GitHub API Error:", error);
  }
}
fetchGitHubUser();
