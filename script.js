const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;
const storageKey = 'shop-lang-viet-theme';
const validThemes = ['vn-royal', 'black', 'white'];

const setTheme = (theme) => {
  if (!validThemes.includes(theme)) return;

  body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === theme);
  });
  localStorage.setItem(storageKey, theme);
};

const savedTheme = localStorage.getItem(storageKey);
setTheme(savedTheme || body.dataset.theme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setTheme(button.dataset.theme);
  });
});
