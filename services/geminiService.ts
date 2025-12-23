import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMinistryContent = async (
  prompt: string, 
  context: 'prayer' | 'sermon' | 'study' | 'chat' = 'chat'
): Promise<string> => {
  
  let systemInstruction = "You are a pastoral, warm, and biblically grounded AI assistant for PrayerZone, a digital Christian ministry hub.";

  if (context === 'prayer') {
    systemInstruction += " Your goal is to write powerful, anointed prayers. Use scripture references. Be empathetic and faith-filled.";
  } else if (context === 'sermon') {
    systemInstruction += " Act as a senior pastor and theologian. Provide structured, exegetical, and practical sermon outlines or content. Use the New King James Version or ESV for scripture.";
  } else if (context === 'study') {
    systemInstruction += " You are a Bible teacher. Explain concepts clearly with historical context and practical application.";
  }

  try {
    const modelId = context === 'sermon' || context === 'study' ? 'gemini-3-pro-preview' : 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, 
      }
    });

    return response.text || "May God bless you. I am currently taking a moment to reflect. Please try again.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "We are experiencing high traffic in the prayer room. Please try your request again shortly.";
  }
};
