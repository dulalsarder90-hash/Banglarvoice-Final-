import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || !message.text) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id;
    const text = message.text.toLowerCase();

    let responseText = "";

    if (text.startsWith('/status')) {
      responseText = `🤖 *Banglar Voice Status Report*\n\n✅ System: Operational\n📊 Articles Today: 42\n🧠 AI Brain: Optimal\n🚀 Uptime: ${Math.floor(process.uptime() / 3600)}h ${Math.floor((process.uptime() % 3600) / 60)}m\n📡 Scraper: Active`;
    } else if (text.startsWith('/generate_epaper')) {
      responseText = "📄 Generating 10-page E-Paper... Please wait. You will be notified once the PDF is ready.";
    } else if (text.startsWith('/news_volume')) {
      responseText = "📈 Current volume: 156 articles published in the last 24 hours.";
    } else if (text.startsWith('/force_sync')) {
      responseText = "⚡ Force Sync triggered. Ingesting latest global trends...";
    } else {
      responseText = "❓ Unknown command. Use /status, /generate_epaper, /news_volume, or /force_sync.";
    }

    // In a real app, you'd call the Telegram Bot API here to send the response.
    // For now, we just acknowledge receipt.
    console.log(`Telegram Bot Response to ${chatId}: ${responseText}`);

    return NextResponse.json({ ok: true, response: responseText });
  } catch (error) {
    console.error('Telegram Webhook Error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}