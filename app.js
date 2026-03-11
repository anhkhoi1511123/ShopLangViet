const STORAGE_KEYS = {
  THEME: "shopLangVietThemeV3",
  USERS: "shopLangVietUsersV3",
  CURRENT_USER: "shopLangVietCurrentUserV3",
  CART: "shopLangVietCartV3",
  ORDERS: "shopLangVietOrdersV3",
  TOPUPS: "shopLangVietTopupsV3",
  NOTIFICATIONS: "shopLangVietNotificationsV2",
  ACCOUNT_LOGS: "shopLangVietAccountLogsV2",
  DIRECT_CHECKOUT: "shopLangVietDirectCheckoutV2"
};

const ORDER_STATUS = {
  PENDING_PAYMENT: "Chờ thanh toán",
  PAID: "Đã thanh toán",
  PROCESSING: "Đang xử lý",
  WORKING: "Đang cày",
  COMPLETED: "Hoàn thành",
  CANCELED: "Hủy"
};

const DISCORD_NAME = "ngai_hamster";
const LOCKED_THEME = "royal-red";

/* DÁN WEBHOOK MỚI CỦA BẠN VÀO ĐÂY */
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1480583732330107091/q0izkFd7-vCnrp6rERRQVOWmtNVsmEen0M9T5slJQw3IMHpJOt_cjIXNjYboQJrqPJsM";
const DISCORD_STAFF_ROLE_ID = "1467060755156308095";

const GAME_META = {
  "Blox Fruits": {
    avatar: "BF",
    emoji: "🍎",
    image: "assets/blox-fruits.png"
  },
  Fisch: {
    avatar: "FI",
    emoji: "🐟",
    image: "assets/fisch.png"
  },
  "Grow a Garden": {
    avatar: "GG",
    emoji: "🌱",
    image: "assets/grow-a-garden.png"
  }
};

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

function formatHeaderCurrency(amount) {
  const value = Number(amount) || 0;

  if (value >= 1e12) {
    return `${new Intl.NumberFormat("vi-VN", {
      maximumFractionDigits: 1
    }).format(value / 1e12)}Tđ`;
  }

  if (value >= 1e9) {
    return `${new Intl.NumberFormat("vi-VN", {
      maximumFractionDigits: 1
    }).format(value / 1e9)}Bđ`;
  }

  if (value >= 1e6) {
    return `${new Intl.NumberFormat("vi-VN", {
      maximumFractionDigits: 1
    }).format(value / 1e6)}Tr`;
  }

  return formatCurrency(value);
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

function createShopId() {
  const base = `${Date.now()}${Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0")}`;
  return base.slice(0, 17);
}

function getInitials(name = "") {
  return String(name)
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase() || "SV";
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

function getGameMeta(game) {
  return GAME_META[game] || { avatar: "GM", emoji: "🎮" };
}

function renderGameAvatar(game, small = false) {
  const meta = getGameMeta(game);

  if (meta.image) {
    return `
      <span class="game-avatar ${small ? "small" : ""}">
        <img
          src="${escapeHtml(meta.image)}"
          alt="${escapeHtml(game)}"
          class="game-avatar-img"
          loading="lazy"
        />
      </span>
    `;
  }

  return `
    <span class="game-avatar ${small ? "small" : ""}">
      ${escapeHtml(meta.avatar)}
    </span>
  `;
}

function isAdminUsername(username = "") {
  return /^(demo|admin|ngai_hamster)$/i.test(String(username || "").trim());
}

function isAdminUser(user = getCurrentUser()) {
  if (!user) return false;
  return user.role === "admin" || isAdminUsername(user.username);
}

function buildStatusOptions(selected = "") {
  return Object.values(ORDER_STATUS)
    .map((status) => `
      <option value="${escapeHtml(status)}" ${status === selected ? "selected" : ""}>
        ${escapeHtml(status)}
      </option>
    `)
    .join("");
}

function getStatusNotificationContent(status, orderId) {
  if (status === ORDER_STATUS.PAID) {
    return {
      title: "Đơn đã thanh toán",
      message: `Đơn ${orderId} của bạn đã được thanh toán thành công.`,
      type: "success"
    };
  }

  if (status === ORDER_STATUS.PROCESSING) {
    return {
      title: "Đơn đang xử lý",
      message: `Đơn ${orderId} của bạn đã được shop tiếp nhận và đang xử lý.`,
      type: "info"
    };
  }

  if (status === ORDER_STATUS.WORKING) {
    return {
      title: "Đơn đang cày",
      message: `Đơn ${orderId} hiện đang được nhân viên xử lý.`,
      type: "info"
    };
  }

  if (status === ORDER_STATUS.COMPLETED) {
    return {
      title: "Đơn hoàn thành",
      message: `Đơn ${orderId} của bạn đã hoàn thành. Vui lòng kiểm tra lại tài khoản.`,
      type: "success"
    };
  }

  if (status === ORDER_STATUS.CANCELED) {
    return {
      title: "Đơn đã hủy",
      message: `Đơn ${orderId} đã bị hủy. Vui lòng liên hệ shop nếu cần hỗ trợ thêm.`,
      type: "danger"
    };
  }

  return {
    title: "Cập nhật đơn hàng",
    message: `Đơn ${orderId} có trạng thái mới: ${status}.`,
    type: "info"
  };
}

function jumpToHashIfNeeded() {
  const hash = window.location.hash;
  if (!hash) return;
  const target = $(hash);
  if (!target) return;

  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
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

function getNotifications() {
  return readJSON(STORAGE_KEYS.NOTIFICATIONS, []);
}

function saveNotifications(list) {
  writeJSON(STORAGE_KEYS.NOTIFICATIONS, list);
}

function getUserNotifications(username = getCurrentUsername()) {
  return getNotifications().filter((item) => item.username === username);
}

function addNotification({ username, title, message, type = "info", orderId = "" }) {
  if (!username) return;

  const list = getNotifications();
  list.unshift({
    id: uid("NTF"),
    username,
    title,
    message,
    type,
    orderId,
    isRead: false,
    createdAt: new Date().toISOString()
  });
  saveNotifications(list);
}

function markNotificationRead(notificationId) {
  const list = getNotifications();
  const item = list.find((row) => row.id === notificationId);
  if (!item) return;

  item.isRead = true;
  saveNotifications(list);
}

function markAllNotificationsRead(username = getCurrentUsername()) {
  const list = getNotifications();

  list.forEach((item) => {
    if (item.username === username) {
      item.isRead = true;
    }
  });

  saveNotifications(list);
}

function getUnreadNotificationCount(username = getCurrentUsername()) {
  return getUserNotifications(username).filter((item) => !item.isRead).length;
}

function getAccountLogs() {
  return readJSON(STORAGE_KEYS.ACCOUNT_LOGS, []);
}

function saveAccountLogs(list) {
  writeJSON(STORAGE_KEYS.ACCOUNT_LOGS, list);
}

function addAccountLog({ username, action, detail = "" }) {
  if (!username) return;

  const list = getAccountLogs();
  list.unshift({
    id: uid("LOG"),
    username,
    action,
    detail,
    createdAt: new Date().toISOString()
  });
  saveAccountLogs(list);
}

function getUserAccountLogs(username = getCurrentUsername()) {
  return getAccountLogs().filter((item) => item.username === username);
}

function getDirectCheckout() {
  return readJSON(STORAGE_KEYS.DIRECT_CHECKOUT, null);
}

function saveDirectCheckout(data) {
  if (!data) {
    localStorage.removeItem(STORAGE_KEYS.DIRECT_CHECKOUT);
    return;
  }
  writeJSON(STORAGE_KEYS.DIRECT_CHECKOUT, data);
}

function getCurrentUsername() {
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || "";
}

function setCurrentUsername(username) {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, username);
}

function logoutUser() {
  const username = getCurrentUsername();
  if (username) {
    addAccountLog({
      username,
      action: "Đăng xuất",
      detail: "Bạn đã đăng xuất khỏi Shop Làng Việt."
    });

    addNotification({
      username,
      title: "Đăng xuất",
      message: "Bạn vừa đăng xuất khỏi tài khoản Shop Làng Việt.",
      type: "info"
    });
  }

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
        role: "admin",
        shopId: "11313091767368760",
        createdAt: "2026-03-01T09:00:00"
      }
    ]);
  } else {
    const migratedUsers = users.map((user) => ({
      ...user,
      role: user.role || (isAdminUsername(user.username) ? "admin" : "user"),
      shopId: user.shopId || createShopId()
    }));
    saveUsers(migratedUsers);
  }

  const orders = getOrders();
  if (!orders.length) {
    saveOrders([
      {
        id: "OD1001",
        user: "demo",
        status: ORDER_STATUS.COMPLETED,
        paymentMethod: "Số dư ví",
        total: 210000,
        createdAt: "2026-03-02T14:25:00",
        updatedAt: "2026-03-02T18:40:00",
        completedAt: "2026-03-02T18:40:00",
        gameNick: "DemoBloxUser",
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
  } else {
    const migratedOrders = orders.map((order) => {
      let nextStatus = order.status || ORDER_STATUS.PENDING_PAYMENT;

      if (/chờ thanh toán/i.test(nextStatus)) nextStatus = ORDER_STATUS.PENDING_PAYMENT;
      else if (/đã thanh toán/i.test(nextStatus)) nextStatus = ORDER_STATUS.PAID;
      else if (/đang xử lý/i.test(nextStatus)) nextStatus = ORDER_STATUS.PROCESSING;
      else if (/đang cày/i.test(nextStatus)) nextStatus = ORDER_STATUS.WORKING;
      else if (/hoàn thành/i.test(nextStatus)) nextStatus = ORDER_STATUS.COMPLETED;
      else if (/hủy/i.test(nextStatus)) nextStatus = ORDER_STATUS.CANCELED;

      return {
        ...order,
        status: nextStatus,
        updatedAt: order.updatedAt || order.createdAt || new Date().toISOString(),
        completedAt: order.completedAt || "",
        items: Array.isArray(order.items) ? order.items : []
      };
    });

    saveOrders(migratedOrders);
  }

  const topups = getTopups();
  if (!topups.length) {
    saveTopups([
      {
        id: "TP1001",
        user: "demo",
        method: "ATM",
        amount: 200000,
        status: "Thành công",
        detail: "BANK-DEMO-001",
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

  if (!Array.isArray(getNotifications())) {
    saveNotifications([]);
  }

  if (!Array.isArray(getAccountLogs())) {
    saveAccountLogs([]);
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
   RUNTIME STYLES
========================= */

function ensureRuntimeStyles() {
  if ($("#runtimeShopStyles")) return;

  const style = document.createElement("style");
  style.id = "runtimeShopStyles";
  style.textContent = `
    .topbar .container {
      width: min(100% - 20px, 1800px);
      max-width: 1800px;
    }

    .topbar-inner {
      display: grid !important;
      grid-template-columns: minmax(260px, 340px) minmax(420px, 1fr) auto;
      align-items: center;
      gap: 32px;
    }

    .brand {
      min-width: 0;
    }

    .nav-links {
      display: flex !important;
      justify-content: center;
      align-items: center;
      gap: 28px;
      flex-wrap: nowrap;
      min-width: 0;
    }

    .nav-links a {
      white-space: nowrap;
      font-size: 15px;
    }

    .top-actions {
      display: flex !important;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      flex-wrap: nowrap;
      min-width: max-content;
      margin-left: auto;
    }

    .top-actions .btn,
    .top-actions .icon-link,
    .user-menu-toggle {
      white-space: nowrap;
    }

    .theme-pills {
      display: none !important;
    }

    .user-menu-caret {
      font-size: 12px;
      line-height: 1;
      opacity: 0.9;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .user-menu-toggle.active .user-menu-caret {
      transform: rotate(180deg);
    }

    .notify-count {
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 700;
      margin-left: 4px;
      background: #f7d36a;
      color: #4d1707;
    }

    .notify-count.zero {
      opacity: .75;
    }

    .user-menu-wrap {
      position: relative;
    }

    .user-menu-toggle {
      border: 1px solid rgba(255,255,255,.08);
      background: rgba(255,255,255,.03);
      color: inherit;
      border-radius: 14px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      min-height: 44px;
    }

    .user-menu-toggle .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #2fd16c;
      flex-shrink: 0;
      box-shadow: 0 0 0 3px rgba(47, 209, 108, .12);
    }

    .user-menu-panel {
      position: absolute;
      right: 0;
      top: calc(100% + 10px);
      width: 340px;
      max-width: min(92vw, 340px);
      background: linear-gradient(180deg, rgba(42, 10, 8, .98), rgba(58, 17, 10, .98));
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 18px;
      box-shadow: 0 20px 40px rgba(0,0,0,.35);
      padding: 16px;
      display: none;
      z-index: 1200;
    }

    .user-menu-panel.show {
      display: block;
    }

    .user-menu-head {
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 12px;
      align-items: center;
      padding-bottom: 14px;
      margin-bottom: 14px;
      border-bottom: 1px dashed rgba(255,255,255,.15);
    }

    .user-menu-avatar {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      background: linear-gradient(135deg, #f7d36a, #d9912d);
      color: #5a1a08;
      font-size: 18px;
    }

    .user-menu-head strong {
      display: block;
      font-size: 18px;
      margin-bottom: 4px;
    }

    .user-menu-head p {
      margin: 0;
      opacity: .92;
      line-height: 1.55;
      font-size: 14px;
    }

    .user-menu-section {
      margin-top: 14px;
    }

    .user-menu-section-title {
      font-size: 13px;
      font-weight: 800;
      color: #f7d36a;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: .04em;
    }

    .user-menu-links {
      display: grid;
      gap: 6px;
    }

    .user-menu-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      text-decoration: none;
      color: inherit;
      padding: 10px 12px;
      border-radius: 12px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.04);
      transition: transform .15s ease, background .15s ease;
    }

    .user-menu-link:hover {
      transform: translateX(2px);
      background: rgba(255,255,255,.06);
    }

    .user-menu-logout {
      width: 100%;
      margin-top: 14px;
    }

    .game-avatar {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 13px;
      color: #5d1b09;
      background: linear-gradient(135deg, #f6d779, #e0a93d);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.4);
      flex-shrink: 0;
      
    }
.game-avatar {
  overflow: hidden;
}

.game-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
    .game-avatar.small {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      font-size: 11px;
    }

    .service-head {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 12px;
    }

    .service-card-clickable {
      cursor: pointer;
      transition: transform .18s ease, box-shadow .18s ease;
    }

    .service-card-clickable:hover {
      transform: translateY(-3px);
    }

    .notification-card {
      border-left: 4px solid rgba(247, 211, 106, .75);
    }

    .notification-card.unread {
      box-shadow: 0 0 0 1px rgba(247, 211, 106, .28) inset;
    }

    .notification-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 13px;
      opacity: .85;
      margin-top: 10px;
    }

    .notification-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 14px;
    }

    .admin-status-box {
      margin-top: 14px;
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 14px;
      border-top: 1px solid rgba(255,255,255,.08);
    }

    .admin-status-select {
      min-width: 180px;
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,.1);
      background: rgba(255,255,255,.05);
      color: inherit;
    }

    .orders-head {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .orders-mode-tag {
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(247, 211, 106, .14);
      color: #f7d36a;
      font-weight: 700;
      font-size: 13px;
    }

    .account-log-card {
      opacity: .96;
    }

    .history-block {
      margin-top: 20px;
    }

    .history-block h3 {
      margin-bottom: 12px;
    }

    .profile-section-id {
      scroll-margin-top: 100px;
    }

    @media (max-width: 1400px) {
      .topbar-inner {
        grid-template-columns: minmax(220px, 300px) minmax(320px, 1fr) auto;
        gap: 22px;
      }

      .nav-links {
        gap: 18px;
      }

      .top-actions {
        gap: 8px;
      }
    }

    @media (max-width: 1180px) {
      .topbar-inner {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .nav-links {
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 14px;
      }

      .top-actions {
        justify-content: flex-start;
        flex-wrap: wrap;
        min-width: 0;
      }
    }

    @media (max-width: 640px) {
      .user-menu-panel {
        left: 0;
        right: auto;
        width: min(94vw, 340px);
      }
    }
  `;
  document.head.appendChild(style);
}

/* =========================
   HEADER
========================= */

function ensureBellLink() {
  const topActions = $(".top-actions");
  if (!topActions) return;

  if (!topActions.querySelector(".bell-link")) {
    const bell = document.createElement("a");
    bell.className = "icon-link bell-link";
    bell.href = "notifications.html";
    bell.innerHTML = `🔔 <span class="notify-count zero" data-notification-count>0</span>`;
    topActions.prepend(bell);
  }
}

function ensureWalletLink() {
  const topActions = $(".top-actions");
  if (!topActions) return;

  if (!topActions.querySelector(".wallet-pill")) {
    const wallet = document.createElement("a");
    wallet.className = "icon-link wallet-pill";
    wallet.href = "wallet.html";
    wallet.innerHTML = `💰 <span data-wallet-balance>0đ</span>`;
    topActions.insertBefore(wallet, topActions.firstChild);
  }
}

function normalizeTopbar() {
  $$(".theme-pills").forEach((el) => el.remove());
  ensureWalletLink();
  ensureBellLink();
}

function bindGlobalUserMenuClose() {
  if (window.__shopUserMenuBound) return;

  document.addEventListener("click", () => {
    $$(".user-menu-panel.show").forEach((panel) => {
      panel.classList.remove("show");
    });

    $$(".user-menu-toggle.active").forEach((toggle) => {
      toggle.classList.remove("active");
    });
  });

  window.__shopUserMenuBound = true;
}
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

  const shopId = currentUser.shopId || createShopId();

  userArea.innerHTML = `
    <div class="user-menu-wrap">
      <button class="user-menu-toggle" type="button" id="userMenuToggle">
  <span class="dot"></span>
  <span>${escapeHtml(currentUser.displayName || currentUser.username)}</span>
  <span class="user-menu-caret">▾</span>
</button>

      <div class="user-menu-panel" id="userMenuPanel">
        <div class="user-menu-head">
          <div class="user-menu-avatar">${escapeHtml(getInitials(currentUser.displayName || currentUser.username))}</div>
          <div>
            <strong>${escapeHtml(currentUser.displayName || currentUser.username)}</strong>
            <p>ID: ${escapeHtml(shopId)}</p>
            <p>Số dư: ${formatCurrency(currentUser.balance || 0)}</p>
          </div>
        </div>

        <div class="user-menu-section">
          <div class="user-menu-section-title">Tài khoản</div>
          <div class="user-menu-links">
            <a class="user-menu-link" href="profile.html#profile-info">
              <span>&gt; Thông tin</span><span>→</span>
            </a>
            <a class="user-menu-link" href="profile.html#password-change">
              <span>&gt; Đổi mật khẩu</span><span>→</span>
            </a>
          </div>
        </div>

        <div class="user-menu-section">
          <div class="user-menu-section-title">Nạp tiền</div>
          <div class="user-menu-links">
            <a class="user-menu-link" href="wallet.html#card-topup">
              <span>&gt; Nạp thẻ cào (Tự động)</span><span>→</span>
            </a>
            <a class="user-menu-link" href="wallet.html#atm-topup">
              <span>&gt; Nạp qua ATM (Ưu đãi hơn)</span><span>→</span>
            </a>
          </div>
        </div>

        <div class="user-menu-section">
          <div class="user-menu-section-title">Lịch sử</div>
          <div class="user-menu-links">
            <a class="user-menu-link" href="wallet.html#card-history">
              <span>&gt; Lịch sử nạp thẻ</span><span>→</span>
            </a>
            <a class="user-menu-link" href="wallet.html#atm-history">
              <span>&gt; Lịch sử nạp ATM</span><span>→</span>
            </a>
            <a class="user-menu-link" href="wallet.html#trade-history">
              <span>&gt; Lịch sử rút/mua</span><span>→</span>
            </a>
            <a class="user-menu-link" href="orders.html">
              <span>&gt; Lịch sử đơn hàng</span><span>→</span>
            </a>
          </div>
        </div>

        <button class="btn btn-primary btn-block user-menu-logout" type="button" id="logoutBtnHeader">
          Đăng xuất
        </button>
      </div>
    </div>
  `;

  bindGlobalUserMenuClose();

  const toggle = $("#userMenuToggle");
  const panel = $("#userMenuPanel");
  const logoutBtn = $("#logoutBtnHeader");

if (toggle && panel) {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    panel.classList.toggle("show");
    toggle.classList.toggle("active", panel.classList.contains("show"));
  });

  panel.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutUser();
      renderUserArea();
      updateCartBadges();
      updateWalletBadges();
      updateNotificationBadges();
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
    el.textContent = formatHeaderCurrency(balance);
  });
}

function updateNotificationBadges() {
  const count = getCurrentUser() ? getUnreadNotificationCount() : 0;

  $$("[data-notification-count]").forEach((el) => {
    el.textContent = count;
    el.classList.toggle("zero", count === 0);
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

  addAccountLog({
    username: user.username,
    action: "Đăng nhập",
    detail: "Bạn đã đăng nhập vào Shop Làng Việt."
  });

  addNotification({
    username: user.username,
    title: "Đăng nhập thành công",
    message: "Bạn vừa đăng nhập vào tài khoản Shop Làng Việt.",
    type: "success"
  });

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

  const newUser = {
    username: cleanUsername,
    password,
    displayName: cleanDisplayName || cleanUsername,
    balance: 0,
    role: isAdminUsername(cleanUsername) ? "admin" : "user",
    shopId: createShopId(),
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  addAccountLog({
    username: cleanUsername,
    action: "Đăng ký",
    detail: "Tài khoản Shop Làng Việt đã được tạo thành công."
  });

  addNotification({
    username: cleanUsername,
    title: "Chào mừng bạn",
    message: "Tài khoản của bạn đã được tạo thành công tại Shop Làng Việt.",
    type: "success"
  });

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

  addNotification({
    username: currentUser.username,
    title: "Cập nhật hồ sơ",
    message: "Thông tin hồ sơ của bạn vừa được cập nhật thành công.",
    type: "success"
  });

  addAccountLog({
    username: currentUser.username,
    action: "Cập nhật hồ sơ",
    detail: "Tên hiển thị hoặc mật khẩu đã được thay đổi."
  });

  return { ok: true, message: "Đã cập nhật hồ sơ." };
}

/* =========================
   CART / DIRECT CHECKOUT
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

function startDirectCheckout(serviceId) {
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

  saveDirectCheckout({
    user: user.username,
    serviceId,
    qty: 1,
    createdAt: new Date().toISOString()
  });

  window.location.href = "checkout.html";
}

function getDirectCheckoutItems(username = getCurrentUsername()) {
  const draft = getDirectCheckout();
  if (!draft || draft.user !== username) return [];

  const service = getServiceById(draft.serviceId);
  if (!service) return [];

  const qty = Number(draft.qty) || 1;

  return [
    {
      id: `DIRECT_${service.id}`,
      user: username,
      serviceId: service.id,
      qty,
      ...service,
      subtotal: qty * service.price,
      isDirect: true
    }
  ];
}

function getCheckoutItems(username = getCurrentUsername()) {
  const directItems = getDirectCheckoutItems(username);
  return directItems.length ? directItems : getUserCartDetailed(username);
}

function clearCheckoutSource() {
  const username = getCurrentUsername();
  const direct = getDirectCheckout();

  if (direct && direct.user === username) {
    saveDirectCheckout(null);
    return;
  }

  const nextCart = getCart().filter((row) => row.user !== username);
  saveCart(nextCart);
  updateCartBadges();
}

function addToCart(serviceId) {
  startDirectCheckout(serviceId);
}

function bindBuyNowButtons(scope = document) {
  scope.querySelectorAll("[data-buy-service]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      startDirectCheckout(button.dataset.buyService);
    });
  });

  scope.querySelectorAll("[data-add-service]").forEach((button) => {
    button.textContent = "Mua ngay";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      startDirectCheckout(button.dataset.addService);
    });
  });

  scope.querySelectorAll("[data-buy-service-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      startDirectCheckout(card.dataset.buyServiceCard);
    });
  });
}

function bindAddToCartButtons(scope = document) {
  bindBuyNowButtons(scope);
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
  return DISCORD_WEBHOOK_URL && DISCORD_WEBHOOK_URL.startsWith("https://discord.com/api/webhooks/");
}

async function notifyDiscordOrder(order, extra = {}) {
  if (!isNotifyApiConfigured()) {
    throw new Error("Bạn chưa cấu hình DISCORD_WEBHOOK_URL trong app.js");
  }

  const currentUser = getCurrentUser();
  const firstItem = order.items?.[0] || null;
  const timestamp = Math.floor(
    new Date(order.createdAt || Date.now()).getTime() / 1000
  );

  const customerName =
    extra.customer ||
    currentUser?.displayName ||
    currentUser?.username ||
    "Khách";

  const servicesText = (order.items || []).length
    ? (order.items || [])
        .map((item) => {
          const total = Number(item.price || 0) * Number(item.qty || 0);
          return `• ${item.name} | SL: ${item.qty} | ${formatCurrency(total)}`;
        })
        .join("\n")
    : "Không có";

  const passwordText = extra.gamePassword
    ? `||${extra.gamePassword}||`
    : "Không có";

  const payload = {
    username: "Shop Làng Việt",
    content: DISCORD_STAFF_ROLE_ID
      ? `<@&${DISCORD_STAFF_ROLE_ID}> 📦 Có đơn mới`
      : "📦 Có đơn mới",
    allowed_mentions: DISCORD_STAFF_ROLE_ID
      ? { parse: ["roles"] }
      : { parse: [] },
    embeds: [
      {
        title: "📦 ĐƠN CÀY THUÊ MỚI",
        color: 11141120,
        description: [
          `🧾 **Mã đơn:** ${order.id || "Không rõ"}`,
          `🎯 **Dịch vụ:**\n${servicesText}`,
          `👤 **Khách:** ${customerName}`,
          `🎮 **Game:** ${firstItem?.game || "Không rõ"}`,
          `🕹️ **Nick game:** ${order.gameNick || "Không có"}`,
          `🔐 **Mật khẩu:** ${passwordText}`,
          `💳 **Thanh toán:** ${order.paymentMethod || "Không rõ"}`,
          `📌 **Trạng thái:** ${order.status || "Không rõ"}`,
          `💰 **Tổng tiền:** ${formatCurrency(order.total || 0)}`,
          `⏰ **Thời gian:** <t:${timestamp}:F>`,
          `📝 **Ghi chú:** ${order.note || "Không có"}`
        ].join("\n\n"),
        footer: {
          text: "Shop Làng Việt"
        },
        timestamp: new Date(order.createdAt || Date.now()).toISOString()
      }
    ]
  };

  const response = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || "Không gửi được webhook Discord.");
  }

  return { ok: true };
}

/* =========================
   ORDER / CHECKOUT
========================= */

function createOrderFromCart({ paymentMethod, gameNick, note }) {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Bạn chưa đăng nhập." };

  const items = getCheckoutItems(user.username);
  if (!items.length) return { ok: false, message: "Không có gói nào để thanh toán." };

  const cleanGameNick = String(gameNick || "").trim();
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

  let status = ORDER_STATUS.PENDING_PAYMENT;

  if (paymentMethod === "wallet") {
    if (Number(users[userIndex].balance || 0) < summary.total) {
      return { ok: false, message: "Số dư ví không đủ. Hãy nạp thêm tiền." };
    }

    users[userIndex].balance -= summary.total;
    saveUsers(users);
    status = ORDER_STATUS.PAID;
  }

  const order = {
    id: `OD${Date.now().toString().slice(-8)}`,
    user: user.username,
    status,
    paymentMethod: paymentMethod === "wallet" ? "Số dư ví" : "Thanh toán thủ công",
    total: summary.total,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: "",
    gameNick: cleanGameNick,
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
  clearCheckoutSource();

  addNotification({
    username: user.username,
    title: "Đã tạo đơn mới",
    message: `Đơn ${order.id} của bạn đã được tạo thành công.`,
    type: "success",
    orderId: order.id
  });

  addAccountLog({
    username: user.username,
    action: "Tạo đơn hàng",
    detail: `Đã tạo đơn ${order.id} với tổng tiền ${formatCurrency(order.total)}.`
  });

  return { ok: true, order };
}

function updateOrderStatus(orderId, nextStatus) {
  const orders = getOrders();
  const index = orders.findIndex((item) => item.id === orderId);

  if (index === -1) {
    return { ok: false, message: "Không tìm thấy đơn hàng." };
  }

  const oldStatus = orders[index].status;
  if (oldStatus === nextStatus) {
    return { ok: true, order: orders[index], message: "Trạng thái không đổi." };
  }

  orders[index].status = nextStatus;
  orders[index].updatedAt = new Date().toISOString();

  if (nextStatus === ORDER_STATUS.COMPLETED) {
    orders[index].completedAt = new Date().toISOString();
  }

  saveOrders(orders);

  const notify = getStatusNotificationContent(nextStatus, orderId);

  addNotification({
    username: orders[index].user,
    title: notify.title,
    message: notify.message,
    type: notify.type,
    orderId
  });

  addAccountLog({
    username: orders[index].user,
    action: "Cập nhật đơn hàng",
    detail: `Đơn ${orderId} đã chuyển sang trạng thái "${nextStatus}".`
  });

  return { ok: true, order: orders[index] };
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

  addNotification({
    username: user.username,
    title: "Nạp tiền thành công",
    message: `Ví của bạn vừa được cộng ${formatCurrency(cleanAmount)} qua ${method}.`,
    type: "success"
  });

  addAccountLog({
    username: user.username,
    action: "Nạp tiền",
    detail: `Nạp ${formatCurrency(cleanAmount)} bằng ${method}.`
  });

  return { ok: true, message: "Nạp tiền thành công." };
}

/* =========================
   UI HELPERS
========================= */

function statusBadge(status) {
  let type = "neutral";

  if (/hoàn thành|thành công|đã thanh toán/i.test(status)) type = "success";
  else if (/chờ thanh toán|chờ/i.test(status)) type = "warning";
  else if (/đang xử lý|đang cày/i.test(status)) type = "warning";
  else if (/hủy|lỗi|thất bại/i.test(status)) type = "danger";

  return `<span class="badge ${type}">${escapeHtml(status)}</span>`;
}

function loginPromptCard(title = "Bạn cần đăng nhập để sử dụng tính năng này.") {
  return `
    <section class="card empty-state">
      <h3>${escapeHtml(title)}</h3>
      <p class="muted">Đăng nhập để xem ví, đơn hàng, thông báo và hồ sơ tài khoản.</p>
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
    .map((service) => `
      <article class="card service-card-clickable" data-buy-service-card="${service.id}">
        <div class="service-head">
          ${renderGameAvatar(service.game)}
          <div>
            <div class="kicker">${escapeHtml(service.game)}</div>
            <h4 style="margin:6px 0 0;">${escapeHtml(service.name)}</h4>
          </div>
        </div>

        <div class="price-tag">${formatCurrency(service.price)}</div>
        <p class="muted">${escapeHtml(service.description)}</p>

        <div class="service-meta">
          <span>${escapeHtml(service.eta)}</span>
          <span>${formatCurrency(service.price)}</span>
        </div>

        <div class="service-actions">
          <a class="btn btn-soft btn-sm" href="${service.page}">Xem chi tiết</a>
          <button class="btn btn-primary btn-sm" type="button" data-buy-service="${service.id}">
            Mua ngay
          </button>
        </div>
      </article>
    `)
    .join("");

  bindBuyNowButtons(target);
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
        <h3>Giỏ hàng không còn là bước bắt buộc</h3>
        <p class="muted">Giờ bạn có thể bấm trực tiếp <strong>Mua ngay</strong> ở từng gói để sang thanh toán luôn.</p>
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
                  <div style="display:flex;gap:10px;align-items:flex-start;">
                    ${renderGameAvatar(item.game, true)}
                    <div>
                      <strong>${escapeHtml(item.name)}</strong>
                      <div class="muted" style="margin-top:6px;">${escapeHtml(item.description)}</div>
                    </div>
                  </div>
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

  const items = getCheckoutItems(user.username);

  if (!items.length) {
    view.innerHTML = `
      <section class="card empty-state">
        <h3>Không có gì để thanh toán</h3>
        <p class="muted">Hãy bấm <strong>Mua ngay</strong> tại gói dịch vụ bạn muốn.</p>
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
      <section class="card">
        <h3>Thông tin đơn hàng</h3>
        <div class="list-stack">
          ${items.map((item) => `
            <div class="order-item">
              <div style="display:flex;gap:12px;align-items:flex-start;">
                ${renderGameAvatar(item.game, true)}
                <div>
                  <strong>${escapeHtml(item.name)}</strong>
                  <div class="mini-meta">
                    <span>${escapeHtml(item.game)}</span>
                    <span>SL: ${item.qty}</span>
                    <span>${formatCurrency(item.subtotal)}</span>
                  </div>
                </div>
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
          <a class="btn btn-soft btn-block" href="services.html">Quay lại dịch vụ</a>
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

      const result = createOrderFromCart({
        paymentMethod: $("#checkoutPayment")?.value || "manual",
        gameNick: $("#checkoutGameNick")?.value || "",
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
          customer: getCurrentUser()?.displayName || getCurrentUser()?.username,
          gamePassword
        });
      } catch (error) {
        console.error(error);
        showToast(`Đã tạo đơn nhưng gửi Discord thất bại: ${error.message || "Lỗi không xác định"}`);
      }

      updateWalletBadges();
      updateNotificationBadges();
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

function ensureWalletSectionIds() {
  const momoForm = $("#momoForm");
  if (momoForm) {
    const wrap = momoForm.closest("section, .card, .form-card") || momoForm.parentElement;
    if (wrap) wrap.id = "atm-topup";
  }

  const cardForm = $("#cardForm");
  if (cardForm) {
    const wrap = cardForm.closest("section, .card, .form-card") || cardForm.parentElement;
    if (wrap) wrap.id = "card-topup";
  }
}

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
  const cardTopups = topups.filter((item) => /thẻ cào/i.test(item.method));
  const atmTopups = topups.filter((item) => !/thẻ cào/i.test(item.method));
  const orders = getOrders()
    .filter((item) => item.user === user.username)
    .filter((item) => /đã thanh toán|hoàn thành|đang xử lý|đang cày/i.test(item.status));

  target.innerHTML = `
    <div class="history-block" id="card-history">
      <h3>Lịch sử nạp thẻ</h3>
      ${cardTopups.length ? `
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
              ${cardTopups.map((item) => `
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
      ` : `
        <section class="card empty-state">
          <p class="muted">Chưa có lịch sử nạp thẻ.</p>
        </section>
      `}
    </div>

    <div class="history-block" id="atm-history">
      <h3>Lịch sử nạp ATM</h3>
      ${atmTopups.length ? `
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
              ${atmTopups.map((item) => `
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
      ` : `
        <section class="card empty-state">
          <p class="muted">Chưa có lịch sử nạp ATM.</p>
        </section>
      `}
    </div>

    <div class="history-block" id="trade-history">
      <h3>Lịch sử rút/mua</h3>
      ${orders.length ? `
        <section class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Dịch vụ</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              ${orders.map((order) => `
                <tr>
                  <td><strong>${escapeHtml(order.id)}</strong></td>
                  <td>${escapeHtml((order.items || []).map((item) => item.name).join(", ") || "-")}</td>
                  <td><strong>${formatCurrency(order.total)}</strong></td>
                  <td>${statusBadge(order.status)}</td>
                  <td>${formatDate(order.createdAt)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </section>
      ` : `
        <section class="card empty-state">
          <p class="muted">Chưa có lịch sử rút/mua.</p>
        </section>
      `}
    </div>
  `;
}

function initWalletPage() {
  renderWalletStats();
  renderWalletHistory();
  ensureWalletSectionIds();

  const momoForm = $("#momoForm");
  if (momoForm) {
    momoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const result = addTopup({
        method: "ATM",
        amount: $("#momoAmount")?.value || "",
        detail: ($("#momoRef")?.value || "").trim() || "BANK-REF"
      });

      showToast(result.message);

      if (result.ok) {
        momoForm.reset();
        renderWalletStats();
        renderWalletHistory();
        renderUserArea();
        updateWalletBadges();
        updateNotificationBadges();
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
        updateNotificationBadges();
      }
    });
  }

  jumpToHashIfNeeded();
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

  const isAdmin = isAdminUser(user);
  const orders = isAdmin
    ? getOrders()
    : getOrders().filter((item) => item.user === user.username);

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
    <div class="orders-head">
      <div>
        <h3 style="margin:0;">${isAdmin ? "Tất cả đơn hàng" : "Lịch sử đơn hàng của bạn"}</h3>
        <p class="muted" style="margin-top:8px;">
          ${isAdmin
            ? "Bạn đang ở chế độ admin và có thể đổi trạng thái đơn."
            : "Theo dõi trạng thái đơn hàng và tiến độ xử lý của shop."}
        </p>
      </div>
      <div class="orders-mode-tag">${isAdmin ? "Admin mode" : "Khách hàng"}</div>
    </div>

    <div class="list-stack">
      ${orders.map((order) => `
        <article class="card order-card">
          <div class="row" style="justify-content:space-between;align-items:flex-start;gap:14px;">
            <div>
              <div class="kicker">Mã đơn ${escapeHtml(order.id)}</div>
              <h3 style="margin-top:12px;">Tổng ${formatCurrency(order.total)}</h3>
              <div class="mini-meta">
                <span>${escapeHtml(order.paymentMethod)}</span>
                <span>${formatDate(order.createdAt)}</span>
                <span>${escapeHtml(order.gameNick || "Chưa nhập nick game")}</span>
                ${isAdmin ? `<span>Khách: ${escapeHtml(order.user)}</span>` : ""}
              </div>
            </div>
            <div>${statusBadge(order.status)}</div>
          </div>

          <div class="order-items">
            ${order.items.map((item) => `
              <div class="order-item">
                <div style="display:flex;gap:12px;align-items:flex-start;">
                  ${renderGameAvatar(item.game, true)}
                  <div>
                    <strong>${escapeHtml(item.name)}</strong>
                    <div class="mini-meta">
                      <span>${escapeHtml(item.game)}</span>
                      <span>SL: ${item.qty}</span>
                      <span>${formatCurrency(item.price * item.qty)}</span>
                    </div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="notice">
            Ghi chú: <strong>${escapeHtml(order.note || "Không có")}</strong><br />
            Cập nhật gần nhất: <strong>${formatDate(order.updatedAt || order.createdAt)}</strong>
          </div>

          ${isAdmin ? `
            <div class="admin-status-box">
              <select class="admin-status-select" data-status-select="${order.id}">
                ${buildStatusOptions(order.status)}
              </select>
              <button class="btn btn-primary btn-sm" type="button" data-status-save="${order.id}">
                Cập nhật trạng thái
              </button>
            </div>
          ` : ""}
        </article>
      `).join("")}
    </div>
  `;

  $$("[data-status-save]").forEach((button) => {
    button.addEventListener("click", () => {
      const orderId = button.dataset.statusSave;
      const select = $(`[data-status-select="${orderId}"]`);
      const nextStatus = select?.value || "";

      const result = updateOrderStatus(orderId, nextStatus);
      if (!result.ok) {
        showToast(result.message);
        return;
      }

      updateNotificationBadges();
      showToast(`Đã cập nhật ${orderId} → ${nextStatus}`);
      renderOrdersPage();
    });
  });
}

/* =========================
   PAGE: NOTIFICATIONS
========================= */

function renderNotificationsPage() {
  const view = $("#notificationsView");
  if (!view) return;

  const user = getCurrentUser();
  if (!user) {
    view.innerHTML = loginPromptCard("Bạn cần đăng nhập để xem hộp thư thông báo.");
    return;
  }

  const notifications = getUserNotifications(user.username);
  const logs = getUserAccountLogs(user.username).slice(0, 20);

  view.innerHTML = `
    <div class="orders-head">
      <div>
        <h3 style="margin:0;">Hộp thư thông báo</h3>
        <p class="muted" style="margin-top:8px;">
          Theo dõi cập nhật đơn hàng, số dư ví và hoạt động tài khoản.
        </p>
      </div>
      <div class="row">
        <button class="btn btn-soft btn-sm" type="button" id="markAllReadBtn">Đánh dấu tất cả đã đọc</button>
      </div>
    </div>

    ${notifications.length ? `
      <div class="list-stack" style="margin-bottom:20px;">
        ${notifications.map((item) => `
          <article class="card notification-card ${item.isRead ? "" : "unread"}">
            <div class="row" style="justify-content:space-between;align-items:flex-start;gap:14px;">
              <div>
                <h3 style="margin:0;">${escapeHtml(item.title)}</h3>
                <p class="muted" style="margin-top:10px;">${escapeHtml(item.message)}</p>
              </div>
              <div>${item.isRead ? statusBadge("Đã đọc") : statusBadge("Mới")}</div>
            </div>

            <div class="notification-meta">
              <span>🕒 ${formatDate(item.createdAt)}</span>
              ${item.orderId ? `<span>🧾 ${escapeHtml(item.orderId)}</span>` : ""}
            </div>

            <div class="notification-actions">
              ${!item.isRead ? `
                <button class="btn btn-primary btn-sm" type="button" data-read-notification="${item.id}">
                  Đánh dấu đã đọc
                </button>
              ` : ""}
              ${item.orderId ? `
                <a class="btn btn-soft btn-sm" href="orders.html">Xem đơn hàng</a>
              ` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    ` : `
      <section class="card empty-state" style="margin-bottom:20px;">
        <h3>Chưa có thông báo nào</h3>
        <p class="muted">Khi có cập nhật đơn hàng hoặc hoạt động tài khoản, hộp thư sẽ hiển thị tại đây.</p>
      </section>
    `}

    <section class="card">
      <h3>Lịch sử tài khoản</h3>
      <div class="list-stack" style="margin-top:14px;">
        ${logs.length ? logs.map((log) => `
          <article class="order-item account-log-card">
            <strong>${escapeHtml(log.action)}</strong>
            <div class="muted" style="margin-top:8px;">${escapeHtml(log.detail || "-")}</div>
            <div class="mini-meta" style="margin-top:8px;">
              <span>${formatDate(log.createdAt)}</span>
            </div>
          </article>
        `).join("") : `
          <p class="muted">Chưa có lịch sử tài khoản.</p>
        `}
      </div>
    </section>
  `;

  const markAllReadBtn = $("#markAllReadBtn");
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener("click", () => {
      markAllNotificationsRead(user.username);
      updateNotificationBadges();
      renderNotificationsPage();
      showToast("Đã đánh dấu tất cả thông báo là đã đọc");
    });
  }

  $$("[data-read-notification]").forEach((button) => {
    button.addEventListener("click", () => {
      markNotificationRead(button.dataset.readNotification);
      updateNotificationBadges();
      renderNotificationsPage();
    });
  });
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
      <section class="card profile-section-id" id="profile-info">
        <h3>Thông tin tài khoản</h3>
        <div class="list-stack">
          <div class="order-item">
            <strong>ID tài khoản</strong>
            <div class="muted" style="margin-top:6px;">${escapeHtml(user.shopId || "-")}</div>
          </div>
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
            <strong>Quyền tài khoản</strong>
            <div class="muted" style="margin-top:6px;">${isAdminUser(user) ? "Admin" : "Người dùng"}</div>
          </div>
          <div class="order-item">
            <strong>Số dư ví</strong>
            <div class="muted" style="margin-top:6px;">${formatCurrency(user.balance)}</div>
          </div>
        </div>
      </section>

      <section class="form-card profile-section-id" id="password-change">
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
        updateNotificationBadges();
        showToast("Cập nhật hồ sơ thành công");
      }
    });
  }

  jumpToHashIfNeeded();
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
        updateNotificationBadges();
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
      updateNotificationBadges();

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
  if (page === "notifications") renderNotificationsPage();
}

/* =========================
   BOOT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  seedData();
  ensureRuntimeStyles();
  initTheme();
  normalizeTopbar();
  renderUserArea();
  updateCartBadges();
  updateWalletBadges();
  updateNotificationBadges();
  bindAddToCartButtons(document);
  bindDiscordButtons();
  initPageSpecific();

  const year = $("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  window.shopAdminUpdateOrderStatus = updateOrderStatus;
});
