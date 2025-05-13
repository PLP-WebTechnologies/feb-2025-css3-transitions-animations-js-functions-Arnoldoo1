// Load theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  };
  
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  
  themeToggle.addEventListener("click", () => {
    const current = document.body.classList.contains("dark-mode") ? "dark" : "light";
    const newTheme = current === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
  
  function setTheme(mode) {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      themeIcon.textContent = "🌙";
    } else {
      document.body.classList.remove("dark-mode");
      themeIcon.textContent = "🌞";
    }
  }
  
  // Bounce animation on button click
  document.getElementById("bounceBtn").addEventListener("click", () => {
    const box = document.getElementById("box");
    box.classList.add("bounce");
    setTimeout(() => box.classList.remove("bounce"), 600);
  });
  