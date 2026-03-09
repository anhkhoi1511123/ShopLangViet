const STORAGE_KEYS = {
  THEME: "shopLangVietThemeV3",
  USERS: "shopLangVietUsersV3",
  CURRENT_USER: "shopLangVietCurrentUserV3",
  CART: "shopLangVietCartV3",
  ORDERS: "shopLangVietOrdersV3",
  TOPUPS: "shopLangVietTopupsV3"
};

const DISCORD_NAME = "ngai_hamster";
const LOCKED_THEME = "royal-red";

/* ĐỔI LINK NÀY THÀNH LINK REPLIT THẬT CỦA BẠN */
const ORDER_NOTIFY_API = "https://TEN-REPL-CUA-BAN.replit.app/api/order-notify";

const SERVICES = [
  {
    id: "bf-level-700",
    slug: "blox-fruits",
    page: "blox-fruits.html",
    game: "Blox Fruits",
    name: "Cày level 1 - 700",
    price: 120000,
    eta: "6 - 12 giờ",
    description: "Phù hợp acc mới, cày nhanh và tối ưu tiến độ ban đầu."
  },
  {
    id: "bf-level-max",
    slug: "blox-fruits",
    page: "blox-fruits.html",
    game: "Blox Fruits",
    name: "Cày level cao theo mốc",
    price: 220000,
    eta: "1 - 2 ngày",
    description: "Nhận cày từ mốc level hiện tại đến level mục tiêu."
  },
  {
    id: "bf-raid",
    slug: "blox-fruits",
    page: "blox-fruits.html",
    game: "Blox Fruits",
    name: "Raid / Fragment",
    price: 90000,
    eta: "Theo số lượng",
    description: "Nhận raid thường, farm fragment, hỗ trợ awaken."
  },
  {
    id: "bf-mastery",
    slug: "blox-fruits",
    page: "blox-fruits.html",
    game: "Blox Fruits",
    name: "Cày mastery vũ khí / trái",
    price: 150000,
    eta: "8 - 18 giờ",
    description: "Cày mastery theo loại vũ khí, melee hoặc trái ác quỷ."
  },

  {
    id: "fisch-basic",
    slug: "fisch",
    page: "fisch.html",
    game: "Fisch",
    name: "Farm tài nguyên cơ bản",
    price: 80000,
    eta: "4 - 8 giờ",
    description: "Farm nhanh tài nguyên cơ bản, phù hợp acc đang phát triển."
  },
  {
    id: "fisch-rare",
    slug: "fisch",
    page: "fisch.html",
    game: "Fisch",
    name: "Farm vật phẩm hiếm",
    price: 170000,
    eta: "Theo độ hiếm",
    description: "Nhận mục tiêu item hiếm, hỗ trợ canh thời gian và địa điểm."
  },
  {
    id: "fisch-quest",
    slug: "fisch",
    page: "fisch.html",
    game: "Fisch",
    name: "Làm nhiệm vụ / mốc tiến độ",
    price: 110000,
    eta: "6 - 10 giờ",
    description: "Hỗ trợ hoàn thành nhiệm vụ hoặc các cột mốc quan trọng."
  },
  {
    id: "fisch-custom",
    slug: "fisch",
    page: "fisch.html",
    game: "Fisch",
    name: "Đơn riêng theo yêu cầu",
    price: 200000,
    eta: "Báo giá riêng",
    description: "Shop nhận đơn riêng theo mục tiêu khách muốn."
  },

  {
    id: "gg-starter",
    slug: "grow-a-garden",
    page: "grow-a-garden.html",
    game: "Grow a Garden",
    name: "Gói starter tăng tiến độ",
    price: 70000,
    eta: "3 - 6 giờ",
    description: "Tối ưu farm đầu game, đẩy tiến độ phát triển vườn."
  },
  {
    id: "gg-resource",
    slug: "grow-a-garden",
    page: "grow-a-garden.html",
    game: "Grow a Garden",
    name: "Farm tài nguyên theo đơn",
    price: 95000,
    eta: "Theo số lượng",
    description: "Farm nguyên liệu, vật phẩm và mục tiêu theo số lượng."
  },
  {
    id: "gg-mission",
    slug: "grow-a-garden",
    page: "grow-a-garden.html",
    game: "Grow a Garden",
    name: "Làm nhiệm vụ / sự kiện",
    price: 125000,
    eta: "6 - 12 giờ",
    description: "Nhận xử lý nhiệm vụ ngày, tuần hoặc event giới hạn."
  },
  {
    id: "gg-premium",
    slug: "grow-a-garden",
    page: "grow-a-garden.html",
    game: "Grow a Garden",
    name: "Gói premium full hỗ trợ",
    price: 210000,
    eta: "1 ngày",
    description: "Combo tối ưu tài nguyên, nhiệm vụ và nâng cấp nhanh."
  }
];

/* =========================
   HELPERS
========================= */

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatCurrency(amount) {
  return `${new Intl.NumberFormat("vi-VN").format(Number(amount) || 0)}đ`;
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return `${date.toLocaleDateString("vi-VN")} ${date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit"
  })}`;
}

function uid(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function ensureToast() {
  let toast = $("#appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  return toast;
}

function showToast(message) {
  const toast = ensureToast();
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

/* =========================
   DATA
========================= */

function getUsers() {
  return readJSON(STORAGE_KEYS.USERS, []);
}

function saveUsers(users) {
  writeJSON(STORAGE_KEYS.USERS, users);
}

function getOrders() {
  return readJSON(STORAGE_KEYS.ORDERS, []);
}

function saveOrders(orders) {
  writeJSON(STORAGE_KEYS.ORDERS, orders);
}

function getTopups() {
  return readJSON(STORAGE_KEYS.TOPUPS, []);
}

function saveTopups(topups) {
  writeJSON(STORAGE_KEYS.TOPUPS, topups);
}

function getCart() {
  return readJSON(STORAGE_KEYS.CART, []);
}

function saveCart(cart) {
  writeJSON(STORAGE_KEYS.CART, cart);
}

function getCurrentUsername() {
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || "";
}

function setCurrentUsername(username) {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, username);
}

function logoutUser() {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

function getCurrentUser() {
  const username = getCurrentUsername();
  return getUsers().find((user) => user.username === username) || null;
}

function getServiceById(serviceId) {
  return SERVICES.find((service) => service.id === serviceId) || null;
}

function seedData() {
  const users = getUsers();
  if (!users.length) {
    saveUsers([
      {
        username: "demo",
        password: "1234",
        displayName: "ngai_hamster",
        balance: 300000,
        createdAt: "2026-03-01T09:00:00"
      }
    ]);
  }

  const orders = getOrders();
  if (!orders.length) {
    saveOrders([
      {
        id: "OD1001",
        user: "demo",
        status: "Hoàn thành",
        paymentMethod: "Số dư ví",
        total: 210000,
        createdAt: "2026-03-02T14:25:00",
        gameNick: "DemoBloxUser",
        discord: "ngai_hamster",
        note: "Đơn demo có sẵn để xem lịch sử.",
        items: [
          {
            serviceId: "bf-level-700",
            name: "Cày level 1 - 700",
            game: "Blox Fruits",
            price: 120000,
            qty: 1
          },
          {
            serviceId: "bf-raid",
            name: "Raid / Fragment",
            game: "Blox Fruits",
            price: 90000,
            qty: 1
          }
        ]
      }
    ]);
  }

  const topups = getTopups();
  if (!topups.length) {
    saveTopups([
      {
        id: "TP1001",
        user: "demo",
        method: "MoMo",
        amount: 200000,
        status: "Thành công",
        detail: "MOMO-DEMO-001",
        createdAt: "2026-03-01T10:10:00"
      },
      {
        id: "TP1002",
        user: "demo",
        method: "Thẻ cào",
        amount: 100000,
        status: "Thành công",
        detail: "Viettel - demo",
        createdAt: "2026-03-03T09:00:00"
      }
    ]);
  }

  if (!Array.isArray(getCart())) {
    saveCart([]);
  }
}

/* =========================
   THEME
========================= */

function applyTheme() {
  document.documentElement.setAttribute("data-theme", LOCKED_THEME);
  localStorage.setItem(STORAGE_KEYS.THEME, LOCKED_THEME);
}

function initTheme() {
  applyTheme();
}

/* =========================
   HEADER
========================= */

function renderUserArea() {
  const userArea = $("#userArea");
  if (!userArea) return;

  const currentUser = getCurrentUser();

  if (!currentUser) {
    userArea.innerHTML = `
      <a class="btn btn-primary btn-sm" href="login.html">Đăng nhập</a>
    `;
    return;
  }

  userArea.innerHTML = `
    <div class="user-mini">
      <span class="user-dot"></span>
      <span>${escapeHtml(currentUser.displayName || currentUser.username)}</span>
    </div>
    <a class="btn btn-soft btn-sm" href="profile.html">Hồ sơ</a>
    <button class="btn btn-soft btn-sm" id="logoutBtnHeader" type="button">Đăng xuất</button>
  `;

  const logoutBtn = $("#logoutBtnHeader");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutUser();
      renderUserArea();
      updateCartBadges();
      updateWalletBadges();
      showToast("Đã đăng xuất");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 500);
    });
  }
}

function updateCartBadges() {
  const username = getCurrentUsername();
  const count = getCart()
    .filter((item) => item.user === username)
    .reduce((sum, item) => sum + item.qty, 0);

  $$("[data-cart-count]").forEach((el) => {
    el.textContent = count;
  });
}

function updateWalletBadges() {
  const user = getCurrentUser();
  const balance = user ? user.balance : 0;

  $$("[data-wallet-balance]").forEach((el) => {
    el.textContent = formatCurrency(balance);
  });
}

/* =========================
   AUTH
========================= */

function loginUser(username, password) {
  const cleanUsername = username.trim().toLowerCase();

  const user = getUsers().find(
    (item) =>
      item.username.toLowerCase() === cleanUsername &&
      item.password === password
  );

  if (!user) {
    return { ok: false, message: "Sai tên đăng nhập hoặc mật khẩu." };
  }

  setCurrentUsername(user.username);
  return { ok: true, user };
}

function registerUser(username, password, displayName) {
  const cleanUsername = username.trim();
  const cleanDisplayName = displayName.trim();

  if (cleanUsername.length < 3) {
    return { ok: false, message: "Tên đăng nhập phải từ 3 ký tự trở lên." };
  }

  if (password.length < 4) {
    return { ok: false, message: "Mật khẩu phải từ 4 ký tự trở lên." };
  }

  const users = getUsers();
  const exists = users.some(
    (item) => item.username.toLowerCase() === cleanUsername.toLowerCase()
  );

  if (exists) {
    return { ok: false, message: "Tên đăng nhập đã tồn tại." };
  }

  users.push({
    username: cleanUsername,
    password,
    displayName: cleanDisplayName || cleanUsername,
    balance: 0,
    createdAt: new Date().toISOString()
  });

  saveUsers(users);
  return { ok: true, message: "Đăng ký thành công." };
}

function updateUserProfile({ displayName, newPassword }) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return { ok: false, message: "Bạn chưa đăng nhập." };
  }

  const users = getUsers();
  const index = users.findIndex((item) => item.username === currentUser.username);

  if (index === -1) {
    return { ok: false, message: "Không tìm thấy tài khoản." };
  }

  users[index].displayName = displayName.trim() || users[index].username;

  if (newPassword) {
    if (newPassword.length < 4) {
      return { ok: false, message: "Mật khẩu mới phải từ 4 ký tự trở lên." };
    }
    users[index].password = newPassword;
  }

  saveUsers(users);
  return { ok: true, message: "Đã cập nhật hồ sơ." };
}

/* =========================
   CART
========================= */

function getUserCartDetailed(username = getCurrentUsername()) {
  return getCart()
    .filter((item) => item.user === username)
    .map((item) => {
      const service = getServiceById(item.serviceId);
      if (!service) return null;

      return {
        ...item,
        ...service,
        subtotal: item.qty * service.price
      };
    })
    .filter(Boolean);
}

function addToCart(serviceId) {
  const user = getCurrentUser();
  if (!user) {
    showToast("Bạn cần đăng nhập trước");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 700);
    return;
  }

  const service = getServiceById(serviceId);
  if (!service) return;

  const cart = getCart();
  const found = cart.find((item) => item.user === user.username && item.serviceId === serviceId);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({
      id: uid("CART"),
      user: user.username,
      serviceId,
      qty: 1
    });
  }

  saveCart(cart);
  updateCartBadges();
  showToast(`Đã thêm "${service.name}" vào giỏ`);
}

function bindAddToCartButtons(scope = document) {
  scope.querySelectorAll("[data-add-service]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.addService);
    });
  });
}

function updateCartQty(itemId, delta) {
  const cart = getCart();
  const item = cart.find((row) => row.id === itemId);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    const nextCart = cart.filter((row) => row.id !== itemId);
    saveCart(nextCart);
  } else {
    saveCart(cart);
  }

  updateCartBadges();
}

function removeCartItem(itemId) {
  const nextCart = getCart().filter((row) => row.id !== itemId);
  saveCart(nextCart);
  updateCartBadges();
}

function clearCurrentUserCart() {
  const username = getCurrentUsername();
  const nextCart = getCart().filter((row) => row.user !== username);
  saveCart(nextCart);
  updateCartBadges();
}

function calcCartSummary(items) {
  return {
    qty: items.reduce((sum, item) => sum + item.qty, 0),
    total: items.reduce((sum, item) => sum + item.subtotal, 0)
  };
}

/* =========================
   DISCORD NOTIFY
========================= */

function isNotifyApiConfigured() {
  return ORDER_NOTIFY_API && !/TEN-REPL-CUA-BAN/i.test(ORDER_NOTIFY_API);
}

async function notifyDiscordOrder(order, extra = {}) {
  if (!isNotifyApiConfigured()) {
    throw new Error("Bạn chưa cấu hình ORDER_NOTIFY_API trong app.js");
  }

  const currentUser = getCurrentUser();
  const firstItem = order.items?.[0] || null;

  const payload = {
    orderId: order.id,
    username: order.user || currentUser?.username || "",
    customer: extra.customer || currentUser?.displayName || currentUser?.username || "Khách",
    discordContact: order.discord || "",
    game: firstItem?.game || "Không rõ",
    packageName: order.items?.map((item) => item.name).join(", ") || "Không rõ",
    items: order.items || [],
    price: order.total,
    gameNick: order.gameNick || "",
    gamePassword: extra.gamePassword || "",
    note: order.note || "",
    paymentStatus: order.status || "",
    paymentMethod: order.paymentMethod || "",
    createdAt: order.createdAt || new Date().toISOString()
  };

  let controller = null;
  let timeoutId = null;

  if (typeof AbortController !== "undefined") {
    controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), 12000);
  }

  try {
    const response = await fetch(ORDER_NOTIFY_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      ...(controller ? { signal: controller.signal } : {})
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Không gửi được đơn sang Discord.");
    }

    return data;
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error("Gửi đơn sang Discord bị quá thời gian chờ.");
    }
    throw error;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

/* =========================
   ORDER / CHECKOUT
========================= */

function createOrderFromCart({ paymentMethod, gameNick, discord, note }) {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Bạn chưa đăng nhập." };

  const items = getUserCartDetailed(user.username);
  if (!items.length) return { ok: false, message: "Giỏ hàng đang trống." };

  const cleanGameNick = String(gameNick || "").trim();
  const cleanDiscord = String(discord || "").trim();
  const cleanNote = String(note || "").trim();

  if (!cleanGameNick) {
    return { ok: false, message: "Bạn cần nhập nick game / tài khoản cần làm." };
  }

  const summary = calcCartSummary(items);
  const users = getUsers();
  const userIndex = users.findIndex((item) => item.username === user.username);

  if (userIndex === -1) {
    return { ok: false, message: "Không tìm thấy tài khoản người dùng." };
  }

  let status = "Chờ thanh toán";

  if (paymentMethod === "wallet") {
    if (Number(users[userIndex].balance || 0) < summary.total) {
      return { ok: false, message: "Số dư ví không đủ. Hãy nạp thêm tiền." };
    }

    users[userIndex].balance -= summary.total;
    saveUsers(users);
    status = "Đã thanh toán";
  }

  const order = {
    id: `OD${Date.now().toString().slice(-8)}`,
    user: user.username,
    status,
    paymentMethod: paymentMethod === "wallet" ? "Số dư ví" : "Thanh toán thủ công",
    total: summary.total,
    createdAt: new Date().toISOString(),
    gameNick: cleanGameNick,
    discord: cleanDiscord,
    note: cleanNote,
    items: items.map((item) => ({
      serviceId: item.serviceId,
      name: item.name,
      game: item.game,
      price: item.price,
      qty: item.qty
    }))
  };

  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  clearCurrentUserCart();

  return { ok: true, order };
}

/* =========================
   TOPUP / WALLET
========================= */

function addTopup({ method, amount, detail }) {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Bạn chưa đăng nhập." };

  const cleanAmount = Number(amount);
  if (!cleanAmount || cleanAmount < 10000) {
    return { ok: false, message: "Số tiền tối thiểu là 10.000đ." };
  }

  const users = getUsers();
  const index = users.findIndex((item) => item.username === user.username);

  if (index === -1) {
    return { ok: false, message: "Không tìm thấy tài khoản." };
  }

  users[index].balance += cleanAmount;
  saveUsers(users);

  const topups = getTopups();
  topups.unshift({
    id: `TP${Date.now().toString().slice(-8)}`,
    user: user.username,
    method,
    amount: cleanAmount,
    status: "Thành công",
    detail,
    createdAt: new Date().toISOString()
  });

  saveTopups(topups);

  return { ok: true, message: "Nạp tiền thành công." };
}

/* =========================
   UI HELPERS
========================= */

function statusBadge(status) {
  let type = "neutral";

  if (/hoàn thành|thành công|đã thanh toán/i.test(status)) type = "success";
  else if (/chờ/i.test(status)) type = "warning";
  else if (/hủy|lỗi|thất bại/i.test(status)) type = "danger";

  return `<span class="badge ${type}">${escapeHtml(status)}</span>`;
}

function loginPromptCard(title = "Bạn cần đăng nhập để sử dụng tính năng này.") {
  return `
    <section class="card empty-state">
      <h3>${escapeHtml(title)}</h3>
      <p class="muted">Đăng nhập để xem ví, đơn hàng, giỏ hàng và hồ sơ tài khoản.</p>
      <div class="row" style="justify-content:center;margin-top:14px;">
        <a class="btn btn-primary" href="login.html">Đăng nhập ngay</a>
        <a class="btn btn-soft" href="index.html">Về trang chủ</a>
      </div>
    </section>
  `;
}

function renderServiceGrid(selector, slug) {
  const target = $(selector);
  if (!target) return;

  const list = slug === "all" ? SERVICES : SERVICES.filter((service) => service.slug === slug);

  target.innerHTML = list
    .map(
      (service) => `
      <article class="card">
        <div class="price-tag">${formatCurrency(service.price)}</div>
        <div class="kicker">${escapeHtml(service.game)}</div>
        <h4>${escapeHtml(service.name)}</h4>
        <p class="muted">${escapeHtml(service.description)}</p>
        <div class="service-meta">
          <span>${escapeHtml(service.eta)}</span>
          <span>${formatCurrency(service.price)}</span>
        </div>
        <div class="service-actions">
          <a class="btn btn-soft btn-sm" href="${service.page}">Xem chi tiết</a>
          <button class="btn btn-primary btn-sm" type="button" data-add-service="${service.id}">
            Thêm vào giỏ
          </button>
        </div>
      </article>
    `
    )
    .join("");

  bindAddToCartButtons(target);
}

/* =========================
   PAGE: CART
========================= */

function renderCartPage() {
  const view = $("#cartView");
  if (!view) return;

  const user = getCurrentUser();
  if (!user) {
    view.innerHTML = loginPromptCard("Bạn cần đăng nhập để xem giỏ hàng.");
    return;
  }

  const items = getUserCartDetailed(user.username);

  if (!items.length) {
    view.innerHTML = `
      <section class="card empty-state">
        <h3>Giỏ hàng đang trống</h3>
        <p class="muted">Hãy vào trang game hoặc dịch vụ để thêm gói bạn muốn đặt.</p>
        <div class="row" style="justify-content:center;margin-top:14px;">
          <a class="btn btn-primary" href="services.html">Xem dịch vụ</a>
          <a class="btn btn-soft" href="index.html">Về trang chủ</a>
        </div>
      </section>
    `;
    return;
  }

  const summary = calcCartSummary(items);

  view.innerHTML = `
    <div class="grid-2">
      <section class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Dịch vụ</th>
              <th>Game</th>
              <th>Số lượng</th>
              <th>Tạm tính</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${items.map((item) => `
              <tr>
                <td>
                  <strong>${escapeHtml(item.name)}</strong>
                  <div class="muted" style="margin-top:6px;">${escapeHtml(item.description)}</div>
                </td>
                <td>${escapeHtml(item.game)}</td>
                <td>
                  <div class="qty-box">
                    <button class="qty-btn" type="button" data-qty-change="${item.id}" data-qty-delta="-1">−</button>
                    <strong>${item.qty}</strong>
                    <button class="qty-btn" type="button" data-qty-change="${item.id}" data-qty-delta="1">+</button>
                  </div>
                </td>
                <td><strong>${formatCurrency(item.subtotal)}</strong></td>
                <td>
                  <button class="btn btn-danger btn-sm" type="button" data-remove-cart="${item.id}">Xóa</button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <aside class="card">
        <h3>Tóm tắt giỏ hàng</h3>
        <div class="summary-list">
          <div class="summary-row">
            <span>Tổng số gói</span>
            <strong>${summary.qty}</strong>
          </div>
          <div class="summary-row">
            <span>Tổng tiền</span>
            <strong>${formatCurrency(summary.total)}</strong>
          </div>
          <div class="summary-row">
            <span>Số dư ví hiện tại</span>
            <strong>${formatCurrency(user.balance)}</strong>
          </div>
          <div class="summary-row total">
            <span>Cần thanh toán</span>
            <span>${formatCurrency(summary.total)}</span>
          </div>
        </div>

        <div class="row" style="margin-top:18px;">
          <a class="btn btn-primary btn-block" href="checkout.html">Sang thanh toán</a>
          <button class="btn btn-soft btn-block" id="clearCartBtn" type="button">Xóa toàn bộ giỏ</button>
        </div>
      </aside>
    </div>
  `;

  $$("[data-qty-change]").forEach((button) => {
    button.addEventListener("click", () => {
      updateCartQty(button.dataset.qtyChange, Number(button.dataset.qtyDelta));
      renderCartPage();
    });
  });

  $$("[data-remove-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      removeCartItem(button.dataset.removeCart);
      renderCartPage();
    });
  });

  const clearCartBtn = $("#clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      clearCurrentUserCart();
      renderCartPage();
      showToast("Đã xóa toàn bộ giỏ hàng");
    });
  }
}

/* =========================
   PAGE: CHECKOUT
========================= */

function renderCheckoutPage() {
  const view = $("#checkoutView");
  if (!view) return;

  const user = getCurrentUser();
  if (!user) {
    view.innerHTML = loginPromptCard("Bạn cần đăng nhập để thanh toán.");
    return;
  }

  const items = getUserCartDetailed(user.username);

  if (!items.length) {
    view.innerHTML = `
      <section class="card empty-state">
        <h3>Không có gì để thanh toán</h3>
        <p class="muted">Giỏ hàng của bạn đang trống.</p>
        <div class="row" style="justify-content:center;margin-top:14px;">
          <a class="btn btn-primary" href="services.html">Thêm dịch vụ</a>
          <a class="btn btn-soft" href="cart.html">Về giỏ hàng</a>
        </div>
      </section>
    `;
    return;
  }

  const summary = calcCartSummary(items);

  view.innerHTML = `
    <div class="grid-2">
      <section class="card">
        <h3>Thông tin đơn hàng</h3>
        <div class="list-stack">
          ${items.map((item) => `
            <div class="order-item">
              <strong>${escapeHtml(item.name)}</strong>
              <div class="mini-meta">
                <span>${escapeHtml(item.game)}</span>
                <span>SL: ${item.qty}</span>
                <span>${formatCurrency(item.subtotal)}</span>
              </div>
            </div>
          `).join("")}
        </div>

        <hr class="divider" />

        <div class="summary-list">
          <div class="summary-row">
            <span>Tổng số gói</span>
            <strong>${summary.qty}</strong>
          </div>
          <div class="summary-row">
            <span>Tổng thanh toán</span>
            <strong>${formatCurrency(summary.total)}</strong>
          </div>
          <div class="summary-row">
            <span>Số dư ví</span>
            <strong>${formatCurrency(user.balance)}</strong>
          </div>
        </div>
      </section>

      <section class="form-card">
        <h3>Xác nhận đặt dịch vụ</h3>
        <form id="checkoutForm">
          <label>
            Nick game / tài khoản cần làm
            <input class="input" type="text" id="checkoutGameNick" placeholder="Ví dụ: AccBlox123" required />
          </label>

          <label>
            Mật khẩu tài khoản game
            <input class="input" type="password" id="checkoutGamePassword" placeholder="Nhập mật khẩu acc cần cày" />
          </label>

          <label>
            Discord liên hệ
            <input class="input" type="text" id="checkoutDiscord" placeholder="Ví dụ: ngai_hamster" />
          </label>

          <label>
            Ghi chú cho shop
            <textarea class="textarea" id="checkoutNote" placeholder="Mô tả mục tiêu, yêu cầu cụ thể..."></textarea>
          </label>

          <label>
            Hình thức thanh toán
            <select class="select" id="checkoutPayment">
              <option value="wallet">Trừ trực tiếp bằng số dư ví</option>
              <option value="manual">Tạo đơn chờ thanh toán thủ công</option>
            </select>
          </label>

          <div class="notice">
            Khi tạo đơn thành công, hệ thống sẽ gửi thông tin đơn sang Discord staff.
            Mật khẩu sẽ hiển thị ở Discord dưới dạng ẩn <strong>||mật khẩu||</strong>.
          </div>

          <button class="btn btn-primary btn-block" type="submit" id="checkoutSubmitBtn">Đặt dịch vụ ngay</button>
          <a class="btn btn-soft btn-block" href="cart.html">Quay lại giỏ hàng</a>
        </form>
      </section>
    </div>
  `;

  const form = $("#checkoutForm");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitBtn = $("#checkoutSubmitBtn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Đang xử lý...";
      }

      const gamePassword = $("#checkoutGamePassword")?.value || "";
      const discordValue = $("#checkoutDiscord")?.value || "";

      const result = createOrderFromCart({
        paymentMethod: $("#checkoutPayment")?.value || "manual",
        gameNick: $("#checkoutGameNick")?.value || "",
        discord: discordValue,
        note: $("#checkoutNote")?.value || ""
      });

      if (!result.ok) {
        showToast(result.message);

        if (/không đủ/i.test(result.message)) {
          setTimeout(() => {
            window.location.href = "wallet.html";
          }, 800);
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Đặt dịch vụ ngay";
        }
        return;
      }

      try {
        await notifyDiscordOrder(result.order, {
          customer: discordValue || getCurrentUser()?.displayName || getCurrentUser()?.username,
          gamePassword
        });
      } catch (error) {
        console.error(error);
        showToast(`Đã tạo đơn nhưng gửi Discord thất bại: ${error.message || "Lỗi không xác định"}`);
      }

      updateWalletBadges();
      showToast(`Tạo đơn ${result.order.id} thành công`);

      setTimeout(() => {
        window.location.href = "orders.html";
      }, 800);
    });
  }
}

/* =========================
   PAGE: WALLET
========================= */

function renderWalletStats() {
  const target = $("#walletStats");
  if (!target) return;

  const user = getCurrentUser();
  if (!user) {
    target.innerHTML = loginPromptCard("Bạn cần đăng nhập để xem ví.");
    return;
  }

  const topups = getTopups().filter((item) => item.user === user.username);
  const orders = getOrders().filter((item) => item.user === user.username);

  const totalTopup = topups.reduce((sum, item) => sum + item.amount, 0);
  const totalSpent = orders
    .filter((item) => /đã thanh toán|hoàn thành/i.test(item.status))
    .reduce((sum, item) => sum + item.total, 0);

  target.innerHTML = `
    <div class="stat-grid">
      <div class="stat-card">
        <strong>${formatCurrency(user.balance)}</strong>
        <span>Số dư ví hiện tại</span>
      </div>
      <div class="stat-card">
        <strong>${formatCurrency(totalTopup)}</strong>
        <span>Tổng đã nạp</span>
      </div>
      <div class="stat-card">
        <strong>${formatCurrency(totalSpent)}</strong>
        <span>Tổng đã dùng</span>
      </div>
      <div class="stat-card">
        <strong>${topups.length}</strong>
        <span>Lịch sử nạp</span>
      </div>
    </div>
  `;
}

function renderWalletHistory() {
  const target = $("#walletHistory");
  if (!target) return;

  const user = getCurrentUser();
  if (!user) return;

  const topups = getTopups().filter((item) => item.user === user.username);

  if (!topups.length) {
    target.innerHTML = `
      <section class="card empty-state">
        <h3>Chưa có lịch sử nạp tiền</h3>
        <p class="muted">Hãy thử nạp demo bằng MoMo hoặc thẻ cào.</p>
      </section>
    `;
    return;
  }

  target.innerHTML = `
    <section class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Mã GD</th>
            <th>Phương thức</th>
            <th>Số tiền</th>
            <th>Chi tiết</th>
            <th>Trạng thái</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          ${topups.map((item) => `
            <tr>
              <td><strong>${escapeHtml(item.id)}</strong></td>
              <td>${escapeHtml(item.method)}</td>
              <td><strong>${formatCurrency(item.amount)}</strong></td>
              <td>${escapeHtml(item.detail || "-")}</td>
              <td>${statusBadge(item.status)}</td>
              <td>${formatDate(item.createdAt)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function initWalletPage() {
  renderWalletStats();
  renderWalletHistory();

  const momoForm = $("#momoForm");
  if (momoForm) {
    momoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const result = addTopup({
        method: "MoMo",
        amount: $("#momoAmount")?.value || "",
        detail: ($("#momoRef")?.value || "").trim() || "MOMO-REF"
      });

      showToast(result.message);

      if (result.ok) {
        momoForm.reset();
        renderWalletStats();
        renderWalletHistory();
        renderUserArea();
        updateWalletBadges();
      }
    });
  }

  const cardForm = $("#cardForm");
  if (cardForm) {
    cardForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const telco = $("#cardTelco")?.value || "";
      const code = ($("#cardCode")?.value || "").trim();
      const serial = ($("#cardSerial")?.value || "").trim();
      const amount = $("#cardAmount")?.value || "";

      const result = addTopup({
        method: "Thẻ cào",
        amount,
        detail: `${telco} | ${serial || "-"} | ${code || "-"}`
      });

      showToast(result.message);

      if (result.ok) {
        cardForm.reset();
        renderWalletStats();
        renderWalletHistory();
        renderUserArea();
        updateWalletBadges();
      }
    });
  }
}

/* =========================
   PAGE: ORDERS
========================= */

function renderOrdersPage() {
  const view = $("#ordersView");
  if (!view) return;

  const user = getCurrentUser();
  if (!user) {
    view.innerHTML = loginPromptCard("Bạn cần đăng nhập để xem lịch sử đơn hàng.");
    return;
  }

  const orders = getOrders().filter((item) => item.user === user.username);

  if (!orders.length) {
    view.innerHTML = `
      <section class="card empty-state">
        <h3>Chưa có đơn hàng nào</h3>
        <p class="muted">Bạn hãy chọn dịch vụ và tạo đơn đầu tiên.</p>
        <div class="row" style="justify-content:center;margin-top:14px;">
          <a class="btn btn-primary" href="services.html">Chọn dịch vụ</a>
        </div>
      </section>
    `;
    return;
  }

  view.innerHTML = `
    <div class="list-stack">
      ${orders.map((order) => `
        <article class="card order-card">
          <div class="row" style="justify-content:space-between;align-items:flex-start;">
            <div>
              <div class="kicker">Mã đơn ${escapeHtml(order.id)}</div>
              <h3 style="margin-top:12px;">Tổng ${formatCurrency(order.total)}</h3>
              <div class="mini-meta">
                <span>${escapeHtml(order.paymentMethod)}</span>
                <span>${formatDate(order.createdAt)}</span>
                <span>${escapeHtml(order.gameNick || "Chưa nhập nick game")}</span>
              </div>
            </div>
            <div>${statusBadge(order.status)}</div>
          </div>

          <div class="order-items">
            ${order.items.map((item) => `
              <div class="order-item">
                <strong>${escapeHtml(item.name)}</strong>
                <div class="mini-meta">
                  <span>${escapeHtml(item.game)}</span>
                  <span>SL: ${item.qty}</span>
                  <span>${formatCurrency(item.price * item.qty)}</span>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="notice">
            Discord: <strong>${escapeHtml(order.discord || "-")}</strong><br />
            Ghi chú: <strong>${escapeHtml(order.note || "Không có")}</strong>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

/* =========================
   PAGE: PROFILE
========================= */

function renderProfilePage() {
  const view = $("#profileView");
  if (!view) return;

  const user = getCurrentUser();
  if (!user) {
    view.innerHTML = loginPromptCard("Bạn cần đăng nhập để xem hồ sơ tài khoản.");
    return;
  }

  const orders = getOrders().filter((item) => item.user === user.username);
  const topups = getTopups().filter((item) => item.user === user.username);

  const totalSpent = orders
    .filter((item) => /đã thanh toán|hoàn thành/i.test(item.status))
    .reduce((sum, item) => sum + item.total, 0);

  const totalTopup = topups.reduce((sum, item) => sum + item.amount, 0);

  view.innerHTML = `
    <div class="grid-2">
      <section class="card">
        <h3>Thông tin tài khoản</h3>
        <div class="list-stack">
          <div class="order-item">
            <strong>Tên đăng nhập</strong>
            <div class="muted" style="margin-top:6px;">${escapeHtml(user.username)}</div>
          </div>
          <div class="order-item">
            <strong>Tên hiển thị</strong>
            <div class="muted" style="margin-top:6px;">${escapeHtml(user.displayName || user.username)}</div>
          </div>
          <div class="order-item">
            <strong>Ngày tham gia</strong>
            <div class="muted" style="margin-top:6px;">${formatDate(user.createdAt)}</div>
          </div>
          <div class="order-item">
            <strong>Số dư ví</strong>
            <div class="muted" style="margin-top:6px;">${formatCurrency(user.balance)}</div>
          </div>
        </div>
      </section>

      <section class="form-card">
        <h3>Cập nhật hồ sơ</h3>
        <form id="profileForm">
          <label>
            Tên hiển thị
            <input class="input" type="text" id="profileDisplayName" value="${escapeHtml(user.displayName || user.username)}" />
          </label>

          <label>
            Mật khẩu mới
            <input class="input" type="password" id="profileNewPassword" placeholder="Để trống nếu không đổi" />
          </label>

          <div class="form-status" id="profileStatus"></div>
          <button class="btn btn-primary btn-block" type="submit">Lưu thay đổi</button>
        </form>
      </section>
    </div>

    <div class="stat-grid" style="margin-top:18px;">
      <div class="stat-card">
        <strong>${orders.length}</strong>
        <span>Tổng đơn hàng</span>
      </div>
      <div class="stat-card">
        <strong>${topups.length}</strong>
        <span>Lượt nạp tiền</span>
      </div>
      <div class="stat-card">
        <strong>${formatCurrency(totalTopup)}</strong>
        <span>Tổng đã nạp</span>
      </div>
      <div class="stat-card">
        <strong>${formatCurrency(totalSpent)}</strong>
        <span>Tổng đã dùng</span>
      </div>
    </div>
  `;

  const form = $("#profileForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const result = updateUserProfile({
        displayName: $("#profileDisplayName")?.value || "",
        newPassword: $("#profileNewPassword")?.value || ""
      });

      const status = $("#profileStatus");
      if (status) {
        status.textContent = result.message;
        status.className = `form-status ${result.ok ? "success" : "error"}`;
      }

      if (result.ok) {
        if ($("#profileNewPassword")) $("#profileNewPassword").value = "";
        renderUserArea();
        showToast("Cập nhật hồ sơ thành công");
      }
    });
  }
}

/* =========================
   PAGE: LOGIN
========================= */

function initLoginPage() {
  const user = getCurrentUser();
  const already = $("#alreadyLogged");

  if (user && already) {
    already.innerHTML = `
      <section class="card">
        <h3>Bạn đang đăng nhập</h3>
        <p class="muted">Xin chào <strong>${escapeHtml(user.displayName || user.username)}</strong>.</p>
        <div class="row" style="margin-top:14px;">
          <a class="btn btn-primary" href="profile.html">Vào hồ sơ</a>
          <button class="btn btn-soft" id="logoutFromLogin" type="button">Đăng xuất</button>
        </div>
      </section>
    `;

    const logoutFromLogin = $("#logoutFromLogin");
    if (logoutFromLogin) {
      logoutFromLogin.addEventListener("click", () => {
        logoutUser();
        renderUserArea();
        updateCartBadges();
        updateWalletBadges();
        showToast("Đã đăng xuất");
        setTimeout(() => window.location.reload(), 400);
      });
    }
  }

  const tabs = $$(".auth-tab");
  const panes = $$(".auth-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panes.forEach((pane) => {
        pane.classList.toggle("active", pane.dataset.authPane === tab.dataset.authTab);
      });
    });
  });

  const loginForm = $("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const result = loginUser($("#loginUsername")?.value || "", $("#loginPassword")?.value || "");
      const status = $("#loginStatus");

      if (!result.ok) {
        if (status) {
          status.textContent = result.message;
          status.className = "form-status error";
        }
        return;
      }

      if (status) {
        status.textContent = "Đăng nhập thành công.";
        status.className = "form-status success";
      }

      renderUserArea();
      updateCartBadges();
      updateWalletBadges();

      showToast("Xin chào, " + (result.user.displayName || result.user.username));

      setTimeout(() => {
        window.location.href = "profile.html";
      }, 700);
    });
  }

  const registerForm = $("#registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const password = $("#registerPassword")?.value || "";
      const password2 = $("#registerPassword2")?.value || "";
      const status = $("#registerStatus");

      if (password !== password2) {
        if (status) {
          status.textContent = "Mật khẩu nhập lại không khớp.";
          status.className = "form-status error";
        }
        return;
      }

      const result = registerUser(
        $("#registerUsername")?.value || "",
        password,
        $("#registerDisplayName")?.value || ""
      );

      if (status) {
        status.textContent = result.message;
        status.className = `form-status ${result.ok ? "success" : "error"}`;
      }

      if (result.ok) {
        registerForm.reset();

        tabs.forEach((item) => {
          item.classList.toggle("active", item.dataset.authTab === "login");
        });

        panes.forEach((pane) => {
          pane.classList.toggle("active", pane.dataset.authPane === "login");
        });

        showToast("Tạo tài khoản thành công");
      }
    });
  }
}

/* =========================
   DISCORD COPY
========================= */

function copyDiscord() {
  if (!navigator.clipboard) {
    showToast("Không copy tự động được. Discord: " + DISCORD_NAME);
    return;
  }

  navigator.clipboard
    .writeText(DISCORD_NAME)
    .then(() => showToast("Đã copy Discord: " + DISCORD_NAME))
    .catch(() => showToast("Không copy tự động được. Discord: " + DISCORD_NAME));
}

function bindDiscordButtons() {
  $$("[data-copy-discord]").forEach((button) => {
    button.addEventListener("click", copyDiscord);
  });
}

/* =========================
   PAGE ROUTER
========================= */

function initPageSpecific() {
  const page = document.body.dataset.page || "";

  renderServiceGrid("#allServicesGrid", "all");
  renderServiceGrid("#bloxFruitsGrid", "blox-fruits");
  renderServiceGrid("#fischGrid", "fisch");
  renderServiceGrid("#growGardenGrid", "grow-a-garden");

  if (page === "cart") renderCartPage();
  if (page === "checkout") renderCheckoutPage();
  if (page === "wallet") initWalletPage();
  if (page === "orders") renderOrdersPage();
  if (page === "profile") renderProfilePage();
  if (page === "login") initLoginPage();
}

/* =========================
   BOOT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  seedData();
  initTheme();
  renderUserArea();
  updateCartBadges();
  updateWalletBadges();
  bindAddToCartButtons(document);
  bindDiscordButtons();
  initPageSpecific();

  const year = $("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
