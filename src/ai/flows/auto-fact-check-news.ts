'use server';
/**
 * @fileOverview This file implements an AI agent that automatically fact-checks incoming news articles.
 *
 * - autoFactCheckNews - A function that handles the news fact-checking process.
 * - AutoFactCheckNewsInput - The input type for the autoFactCheckNews function.
 * - AutoFactCheckNewsOutput - The return type for the autoFactCheckNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoFactCheckNewsInputSchema = z.object({
  title: z.string().describe('The title of the news article.'),
  content: z.string().describe('The full content of the news article.'),
});
export type AutoFactCheckNewsInput = z.infer<typeof AutoFactCheckNewsInputSchema>;

const AutoFactCheckNewsOutputSchema = z.object({
  isFactChecked: z
    .boolean()
    .describe(
      'True if the article passes fact-checking and is deemed trustworthy, false otherwise.'
    ),
  factCheckReport: z
    .string()
    .describe(
      'A detailed report from the AI explaining its findings, including identified misinformation, unverified rumors, or supporting evidence.'
    ),
  trustScore: z
    .number()
    .min(0)
    .max(100)
    .describe('A numerical score (0-100) indicating the trustworthiness of the article, where 100 is highly trustworthy.'),
});
export type AutoFactCheckNewsOutput = z.infer<typeof AutoFactCheckNewsOutputSchema>;

export async function autoFactCheckNews(
  input: AutoFactCheckNewsInput
): Promise<AutoFactCheckNewsOutput> {
  return autoFactCheckNewsFlow(input);
}

const autoFactCheckNewsPrompt = ai.definePrompt({
  name: 'autoFactCheckNewsPrompt',
  input: {schema: AutoFactCheckNewsInputSchema},
  output: {schema: AutoFactCheckNewsOutputSchema},
  prompt: `You are an AI fact-checker for a news organization. Your primary goal is to ensure the accuracy and trustworthiness of news content before publication.

Analyze the provided news article objectively. Cross-reference any claims, data, or statements against widely accepted facts and information. Your task is to eliminate misinformation, identify and discard unverified rumors, and detect any potential hallucination.

Based on your analysis, determine if the article is factually sound and trustworthy.

News Article Title: {{{title}}}
News Article Content: """{{{content}}}"""

Provide your output in a structured JSON format, including:
- A boolean indicating if the article is fact-checked and trustworthy.
- A detailed report explaining your findings, mentioning any identified issues or supporting points.
- A numerical trust score between 0 and 100.`,
});

const autoFactCheckNewsFlow = ai.defineFlow(
  {
    name: 'autoFactCheckNewsFlow',
    inputSchema: AutoFactCheckNewsInputSchema,
    outputSchema: AutoFactCheckNewsOutputSchema,
  },
  async input => {
    const {output} = await autoFactCheckNewsPrompt(input);
    return output!;
  }
);
