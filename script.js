 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
index 8b137891791fe96927ad78e64b0aad7bded08bdc..91bbbbd8c6c8c60aa9f8c8a132f86f1b4dbbe5e0 100644
--- a/script.js
+++ b/script.js
@@ -1 +1,23 @@
+const themeButtons = document.querySelectorAll('.theme-btn');
+const body = document.body;
+const storageKey = 'shop-lang-viet-theme';
+const validThemes = ['vn-royal', 'black', 'white'];
 
+const setTheme = (theme) => {
+  if (!validThemes.includes(theme)) return;
+
+  body.dataset.theme = theme;
+  themeButtons.forEach((button) => {
+    button.classList.toggle('active', button.dataset.theme === theme);
+  });
+  localStorage.setItem(storageKey, theme);
+};
+
+const savedTheme = localStorage.getItem(storageKey);
+setTheme(savedTheme || body.dataset.theme);
+
+themeButtons.forEach((button) => {
+  button.addEventListener('click', () => {
+    setTheme(button.dataset.theme);
+  });
+});
 
EOF
)
