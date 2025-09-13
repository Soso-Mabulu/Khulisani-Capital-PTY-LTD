'use server';
/**
 * @fileOverview A site chatbot flow that answers questions about Kulisani Capital.
 *
 * - siteChat - A function that handles the chatbot conversation.
 * - SiteChatInput - The input type for the siteChat function.
 * - SiteChatOutput - The return type for the siteChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {gemini15Flash} from '@genkit-ai/googleai';

const SiteChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
  message: z.string().describe('The user\'s message.'),
});
export type SiteChatInput = z.infer<typeof SiteChatInputSchema>;

export type SiteChatOutput = string;

const siteChatFlow = ai.defineFlow(
  {
    name: 'siteChatFlow',
    inputSchema: SiteChatInputSchema,
    outputSchema: z.string(),
  },
  async ({history, message}) => {
    const enhancedPrompt = `You are a helpful, professional, and knowledgeable AI assistant for Kulisani Capital (Pty) Ltd. Based on this information about the company:

**COMPANY OVERVIEW**
Kulisani Capital (Pty) Ltd is a boutique professional services firm with over 30 years of combined experience in financial advisory.

**SERVICES**
- Accounting & Technical Advisory
- Valuations & Due Diligence  
- Tax Advisory
- Audit Readiness & Review
- Financial Modelling & Forecasting
- Business Automation & IT Solutions

**CONTACT**
Email: info@kulisani.co.za
Phone: +27 72 224 3956 (Paris Absa - Primary Contact)
Alternative: +27 82 338 2653 (Xhanti Absa Wits)
Alternative: +27 83 979 5640 (Mpho Bopape)
Location: 109 Leeuwkop Rd, 123 The Kanyin, Sandton, Gauteng, 2191

Please respond professionally to: ${message}`;

    const response = await ai.generate({
      model: gemini15Flash,
      prompt: enhancedPrompt,
    });

    return response.text || "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at info@kulisani.co.za.";
  }
);

export async function siteChat(input: SiteChatInput): Promise<SiteChatOutput> {
  try {
    return await siteChatFlow(input);
  } catch (error) {
    console.error('Site Chat Error:', error);
    return "I'm currently experiencing technical difficulties. Please contact us directly at info@kulisani.co.za or call +27 12 345 6789 for immediate assistance.";
  }
}
