const html = document.querySelector("html");
const btn = document.querySelector("#theme-btn");

/* apply saved theme when page loads */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");
  console.log("Dark mode toggled");

  /* save theme preference */
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

btn.addEventListener("click", toggleTheme);