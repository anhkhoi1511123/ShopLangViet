 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
index 8b137891791fe96927ad78e64b0aad7bded08bdc..6a1292ae346255b41d622b6a678ef42a0c037ade 100644
--- a/script.js
+++ b/script.js
@@ -1 +1,22 @@
+const themeButtons = document.querySelectorAll('.theme-btn');
+const body = document.body;
+const storageKey = 'shop-lang-viet-theme';
 
+const setTheme = (theme) => {
+  body.dataset.theme = theme;
+  themeButtons.forEach((button) => {
+    button.classList.toggle('active', button.dataset.theme === theme);
+  });
+  localStorage.setItem(storageKey, theme);
+};
+
+const savedTheme = localStorage.getItem(storageKey);
+if (savedTheme) {
+  setTheme(savedTheme);
+}
+
+themeButtons.forEach((button) => {
+  button.addEventListener('click', () => {
+    setTheme(button.dataset.theme);
+  });
+});
 
EOF
)
