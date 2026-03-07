const body = document.body;
const themeButtons = document.querySelectorAll(".theme-btn");
const settingsPanel = document.getElementById("settingsPanel");
const settingsToggle = document.getElementById("settingsToggle");
const openThemeBtn = document.getElementById("openThemeBtn");
const closeSettings = document.getElementById("closeSettings");
const overlay = document.getElementById("overlay");
const yearEl = document.getElementById("year");

const THEME_KEY = "shoplangviet-theme";

function setTheme(theme) {
  body.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);

  themeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
}

function openSettings() {
  settingsPanel.classList.add("show");
  overlay.classList.add("show");
}

function closePanel() {
  settingsPanel.classList.remove("show");
  overlay.classList.remove("show");
}

const savedTheme = localStorage.getItem(THEME_KEY) || "langviet";
setTheme(savedTheme);

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTheme(btn.dataset.theme);
  });
});

settingsToggle.addEventListener("click", openSettings);
openThemeBtn.addEventListener("click", openSettings);
closeSettings.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePanel();
  }
});

yearEl.textContent = new Date().getFullYear();
