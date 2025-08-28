// ================================
// Greeting (Personalization)
// ================================
function setGreeting() {
  let name = document.getElementById("userName").value;
  if (name.trim() !== "") {
    document.getElementById("greetingText").innerText = `👋 Welcome, ${name}!`;
  } else {
    alert("Please enter your name!");
  }
}

// ================================
// Part 1: Variables & Conditionals
// ================================
function checkAge() {
  let age = document.getElementById("userAge").value;
  let result = "";

  if (age >= 18) {
    result = "You are an adult ✅";
  } else if (age > 0) {
    result = "You are still a minor ⛔";
  } else {
    result = "Please enter a valid age!";
  }

  document.getElementById("ageResult").innerText = result;
}

// ================================
// Part 2: Functions
// ================================
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(100, 3); 
  document.getElementById("totalResult").innerText = "Total is: " + total + " KES";
}

// ================================
// Part 3: Loops (Live Countdown)
// ================================
function startLiveCountdown() {
  let countdownDisplay = document.getElementById("liveCountdown");
  let time = 5;

  let interval = setInterval(() => {
    countdownDisplay.innerText = `Countdown: ${time}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      countdownDisplay.innerText = "⏰ Time’s up!";
    }
  }, 1000);
}

// ================================
// Part 4: DOM Manipulation
// ================================
function toggleText() {
  let para = document.getElementById("toggleParagraph");
  para.style.display = (para.style.display === "none") ? "block" : "none";
}

function addListItem() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.innerText = "New item " + (ul.children.length + 1);
  ul.appendChild(li);
}

// ================================
// Dark Mode Toggle
// ================================
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ================================
// Reveal Sections on Scroll
// ================================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach((section) => {
    let position = section.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      section.classList.remove("hidden");
    }
  });
});
