import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "running",
    system: "Banglar Voice AI",
    version: "1.0.0",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    aiEngine: "Gemini 2.5 Flash (Free Tier)",
    autonomousMode: true,
    scrapingActive: true
  });
}