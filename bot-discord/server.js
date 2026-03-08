import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || "*"
}));
app.use(express.json());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

function formatCurrency(amount) {
  return `${new Intl.NumberFormat("vi-VN").format(Number(amount) || 0)}đ`;
}

function safeText(value, fallback = "-") {
  const text = String(value ?? "").trim();
  return text || fallback;
}

function spoilerText(value) {
  const text = safeText(value, "không có");
  return `||${text}||`;
}

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    botReady: client.isReady()
  });
});

app.post("/api/order-notify", async (req, res) => {
  try {
    const {
      orderId,
      customer,
      discordContact,
      game,
      packageName,
      price,
      gameNick,
      gamePassword,
      note,
      paymentStatus
    } = req.body;

    if (!orderId || !customer || !game || !packageName || !price || !gameNick || !paymentStatus) {
      return res.status(400).json({
        ok: false,
        message: "Thiếu dữ liệu đơn hàng."
      });
    }

    if (!client.isReady()) {
      return res.status(503).json({
        ok: false,
        message: "Bot Discord chưa sẵn sàng."
      });
    }

    const channel = await client.channels.fetch(process.env.DISCORD_CHANNEL_ID);

    if (!channel || !channel.isTextBased()) {
      return res.status(500).json({
        ok: false,
        message: "Không tìm thấy kênh Discord hoặc kênh không gửi được tin nhắn."
      });
    }

    const embed = new EmbedBuilder()
      .setColor(0xf4c55a)
      .setTitle("📦 Đơn hàng cày thuê mới")
      .setDescription("Có một đơn hàng mới vừa được tạo từ website.")
      .addFields(
        { name: "🆔 Mã đơn", value: safeText(orderId), inline: true },
        { name: "👤 Khách", value: safeText(customer), inline: true },
        { name: "💬 Discord", value: safeText(discordContact, "Không có"), inline: true },

        { name: "🎮 Game", value: safeText(game), inline: true },
        { name: "📦 Gói", value: safeText(packageName), inline: true },
        { name: "💰 Giá", value: formatCurrency(price), inline: true },

        { name: "🕹️ Nick game", value: safeText(gameNick), inline: true },
        { name: "🔒 Mật khẩu", value: spoilerText(gamePassword), inline: true },
        { name: "✅ Thanh toán", value: safeText(paymentStatus), inline: true },

        { name: "📝 Ghi chú", value: safeText(note, "Không có"), inline: false }
      )
      .setFooter({
        text: "Shop Làng Việt • Hệ thống đơn hàng"
      })
      .setTimestamp();

    await channel.send({
      content: "🔔 Staff có đơn mới cần xử lý!",
      embeds: [embed]
    });

    return res.json({
      ok: true,
      message: "Đã gửi đơn hàng sang Discord."
    });
  } catch (error) {
    console.error("order-notify error:", error);
    return res.status(500).json({
      ok: false,
      message: "Lỗi server khi gửi Discord."
    });
  }
});

const PORT = Number(process.env.PORT || 3000);

client.once("ready", () => {
  console.log(`Discord bot logged in as ${client.user.tag}`);

  app.listen(PORT, () => {
    console.log(`API server running at http://localhost:${PORT}`);
  });
});

client.login(process.env.DISCORD_BOT_TOKEN).catch((error) => {
  console.error("Bot login failed:", error);
});
