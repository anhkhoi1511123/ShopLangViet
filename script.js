const discordName = "ngai_hamster";
const root = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-btn");
const copyBtnTop = document.getElementById("copyDiscordBtn");
const copyBtnBottom = document.getElementById("copyDiscordBtnBottom");
const year = document.getElementById("year");

function applyTheme(themeName) {
  root.setAttribute("data-theme", themeName);
  localStorage.setItem("shopTheme", themeName);

  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === themeName);
  });
}

function copyDiscordName() {
  navigator.clipboard
    .writeText(discordName)
    .then(() => {
      alert("Đã copy Discord profile: " + discordName);
    })
    .catch(() => {
      alert("Không copy tự động được. Discord của bạn là: " + discordName);
    });
}

const savedTheme = localStorage.getItem("shopTheme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme("vietnam");
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.theme);
  });
});

if (copyBtnTop) {
  copyBtnTop.addEventListener("click", copyDiscordName);
}

if (copyBtnBottom) {
  copyBtnBottom.addEventListener("click", copyDiscordName);
}

if (year) {
  year.textContent = new Date().getFullYear();
}
