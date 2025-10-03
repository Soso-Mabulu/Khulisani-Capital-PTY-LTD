"use server";
/**
 * @fileOverview A site chatbot flow that answers questions about Kulisani Capital.
 *
 * - siteChat - A function that handles the chatbot conversation.
 * - SiteChatInput - The input type for the siteChat function.
 * - SiteChatOutput - The return type for the siteChat function.
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

export interface SiteChatInput {
  history: Array<{
    role: "user" | "model";
    content: string;
  }>;
  message: string;
}

export type SiteChatOutput = string;

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function siteChat(input: SiteChatInput): Promise<SiteChatOutput> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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
Email: info@kulisanicapital.com
Phone: +27 72 224 3956 (Primary Contact)
Alternative: +27 82 338 2653 (Alternative Contact)
Alternative: +27 83 979 5640 (Alternative Contact)
Location: 109 Leeuwkop Rd, 123 The Kanyin, Sandton, Gauteng, 2191

Please respond professionally to: ${input.message}`;

    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    const text = response.text();

    return text || "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at info@kulisanicapital.com.";
  } catch (error) {
    console.error("Site Chat Error:", error);
    return "I'm currently experiencing technical difficulties. Please contact us directly at info@kulisanicapital.com or call +27 12 345 6789 for immediate assistance.";
  }
}
