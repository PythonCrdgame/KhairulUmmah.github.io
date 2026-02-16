
import { GoogleGenAI } from "@google/genai";

const SCHOOL_CONTEXT = `
You are the Khairul Ummah AI Assistant, specifically for Khairul Ummah School (KUS) based in Scarborough, Ontario, Canada.
Our School Info:
- Motto: "The Best of Nations" (derived from the name Khairul Ummah).
- Vision: To develop a generation that is academically excellent and spiritually grounded in Islamic values.
- Established: September 2005.
- Principal: Dr. Ahmad Khairul.
- Curriculum: Follows the Ontario Ministry of Education guidelines integrated with Arabic, Quran, and Islamic Studies.
- Admissions: Registration for the upcoming academic year is currently open.
- Location: 235 Milner Ave, Scarborough, ON M1S 3P6.
- Contact: admin@khairulummah.ca | Phone: 647-717-1615.

Your role is to help students, parents, and teachers navigate the portal, provide admission details, and explain school policies. Be professional, warm, and helpful. Always refer to the school as "Khairul Ummah" or "KUS".
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model'; text: string }[]) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please ensure process.env.API_KEY is configured.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
      { role: 'user', parts: [{ text: userMessage }] }
    ],
    config: {
      systemInstruction: SCHOOL_CONTEXT,
      temperature: 0.7,
      topP: 0.8,
      maxOutputTokens: 500,
    },
  });

  const response = await model;
  return response.text || "I'm sorry, I couldn't process that. Please try again.";
};
