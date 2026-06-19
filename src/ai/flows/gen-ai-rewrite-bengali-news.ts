'use server';
/**
 * @fileOverview This file implements a Genkit flow for rewriting English news articles into high-standard,
 * professional, and copyright-free Bengali prose.
 *
 * - rewriteBengaliNews - A function that handles the news rewriting process.
 * - RewriteNewsInput - The input type for the rewriteBengaliNews function.
 * - RewriteNewsOutput - The return type for the rewriteBengaliNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteNewsInputSchema = z.object({
  englishNewsArticle: z.string().describe('The English news article to be rewritten into Bengali.'),
});
export type RewriteNewsInput = z.infer<typeof RewriteNewsInputSchema>;

const RewriteNewsOutputSchema = z.object({
  bengaliNewsArticle: z
    .string()
    .describe('The rewritten news article in high-standard, professional, and copyright-free Bengali prose.'),
});
export type RewriteNewsOutput = z.infer<typeof RewriteNewsOutputSchema>;

export async function rewriteBengaliNews(
  input: RewriteNewsInput
): Promise<RewriteNewsOutput> {
  return rewriteBengaliNewsFlow(input);
}

const rewriteBengaliNewsPrompt = ai.definePrompt({
  name: 'rewriteBengaliNewsPrompt',
  input: {schema: RewriteNewsInputSchema},
  output: {schema: RewriteNewsOutputSchema},
  prompt: `You are an expert Bengali journalist and editor. Your task is to rewrite the following English news article into high-standard, professional, and copyright-free Bengali prose.

Ensure the rewritten article maintains unique editorial quality, local linguistic fluency, and is completely free from copyright infringement.

English News Article: """{{{englishNewsArticle}}}"""

Rewrite the article into professional Bengali prose.`, 
});

const rewriteBengaliNewsFlow = ai.defineFlow(
  {
    name: 'rewriteBengaliNewsFlow',
    inputSchema: RewriteNewsInputSchema,
    outputSchema: RewriteNewsOutputSchema,
  },
  async (input) => {
    const {output} = await rewriteBengaliNewsPrompt(input);
    return output!;
  }
);
