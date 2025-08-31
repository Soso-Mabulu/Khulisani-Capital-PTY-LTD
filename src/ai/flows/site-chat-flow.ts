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
    const llm = ai.model('gemini-2.5-flash');

    const response = await llm.generate({
      prompt: `You are a helpful and friendly chatbot for Kulisani Capital, a professional services firm. Your goal is to answer user questions based on the information provided below. Do not make up information. If the answer is not in the context, say that you don't have that information.

Keep your answers concise and helpful.

Here is the content of the website:

**About Us**
Kulisani Capital (Pty) Ltd is a boutique professional services firm dedicated to empowering businesses with precision-driven financial and strategic advisory solutions.
Founded by a team of seasoned Chartered Accountants with over 30 years of combined experience, Kulisani Capital was built on a commitment to excellence, integrity, and measurable impact. Our professionals bring deep technical expertise and industry insight to every engagement, ensuring that our clients receive not only compliant and accurate financial guidance, but also actionable intelligence that drives growth and resilience.
We serve a diverse client base across multiple sectors, partnering with organizations of all sizes to deliver tailored solutions that meet their unique challenges and strategic goals. Whether you're navigating complex regulatory landscapes, preparing for investment, or optimizing internal operations, we act as a trusted partner — delivering strategic clarity and operational confidence at every step.

**What Drives Us**
- Our Mission: To empower businesses with accurate, actionable, and compliant financial insights that drive strategic clarity, operational efficiency, and long-term growth.
- Our Vision: To be Africa’s most trusted financial advisory partner — known for excellence, innovation, and impact across industries and borders.
- Our Purpose: We exist to elevate African enterprises by delivering world-class financial solutions that unlock potential, reduce complexity, and enable confident decision-making.
- Our Promise: We combine deep technical expertise with a collaborative approach, ensuring every client receives tailored, high-quality service that solves real business problems.

**Our Services**
- Accounting & Technical Advisory: Expert guidance on financial reporting (IFRS), complex group consolidations, and evolving accounting standards.
- Valuations & Due Diligence: Business and equity valuations, financial due diligence for M&A, and deal structuring.
- Tax Advisory: Corporate tax planning, SARS engagement, and dispute resolution.
- Audit Readiness & Review: External audit preparation, internal control assessments, and pre-issuance quality reviews.
- Financial Modelling & Forecasting: Bespoke financial models, scenario planning, and capital structuring.
- Business Automation & IT Solutions: Low-code automation, advanced Excel solutions, and cloud systems integration.

**Careers**
We offer open roles for talented professionals, internship and graduate opportunities, and we are open to partnerships with freelancers and other firms.

**Contact**
- Email: info@kulisani.co.za
- Phone: +27 12 345 6789
- Office: Pretoria, South Africa

Now, continue the conversation based on the history and the user's new message.
`,
      history,
      promptHistory: [
        {role: 'user', content: message}
      ]
    });

    return response.text;
  }
);

export async function siteChat(input: SiteChatInput): Promise<SiteChatOutput> {
  return siteChatFlow(input);
}
