export type NewsDecision = "GLOBAL_PUSH" | "MULTI_CHANNEL" | "WEB_ONLY" | "REJECT";

export function calculateViralScore(news: { title: string; sourceTrust?: number; globalImpact?: boolean }) {
  let score = 40;
  
  if (news.title.toLowerCase().includes("breaking")) score += 25;
  if (news.title.toLowerCase().includes("football") || news.title.toLowerCase().includes("world cup")) score += 20;
  if ((news.sourceTrust ?? 50) > 70) score += 20;
  if (news.globalImpact) score += 20;

  return score;
}

export function finalBrainDecision(score: number): NewsDecision {
  if (score > 85) return "GLOBAL_PUSH";
  if (score > 70) return "MULTI_CHANNEL";
  if (score > 50) return "WEB_ONLY";
  return "REJECT";
}

export const systemAnalytics = {
  traffic: 0,
  revenue: 0,
  posts: 0,
};