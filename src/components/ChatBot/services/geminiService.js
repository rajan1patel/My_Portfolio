import { extractPageContent } from '../utils/contentExtractor';

class GeminiAPIService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';
  }

  async sendMessage(userMessage) {
    try {
      const pageContent = await extractPageContent();
      
      const prompt = `
        You are an AI assistant for Rajan Patel's portfolio.
        Current Page Content: ${pageContent}
        User says: "${userMessage}"
        
        Rules:
        1. If navigating: {"type": "tool", "tool": "navigate", "args": {"sectionId": "..."}}
        2. If answering: {"type": "message", "content": "..."}
        Valid sectionIds: home, About, Services, Portfolio, Contact
      `;

      const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            // FIX: thinking_level must be inside thinkingConfig
            thinkingConfig: {
              includeThoughts: false, // Set to true if you want to see the "reasoning"
              thinkingLevel: "minimal" // Options: "minimal", "low", "medium", "high"
            },
            temperature: 1.0,
            maxOutputTokens: 1000,
            responseMimeType: "application/json" // Forces Gemini to return valid JSON
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Details:', errorData);
        throw new Error(errorData.error?.message || 'API Communication Error');
      }

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!aiResponse) throw new Error('Empty response from AI');

      // Robust JSON Parsing
      try {
        const cleaned = aiResponse.replace(/```json|```/g, '').trim();
        return JSON.parse(cleaned);
      } catch (e) {
        // Fallback if AI returns plain text despite JSON mode
        return { type: 'message', content: aiResponse };
      }
    } catch (error) {
      console.error('Service Error:', error);
      return { 
        type: 'message', 
        content: `Error: ${error.message}. Please check your connection or API key.` 
      };
    }
  }
}

// --- Singleton Management ---
let geminiService = null;

export const initializeGeminiService = (apiKey) => {
  geminiService = new GeminiAPIService(apiKey);
  return geminiService;
};

export const getGeminiService = () => {
  if (!geminiService) {
    const apiKey = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY;
    if (apiKey) {
      initializeGeminiService(apiKey);
    } else {
      return createMockService();
    }
  }
  return geminiService;
};

const createMockService = () => ({
  sendMessage: async (msg) => ({
    type: 'message',
    content: "API key missing. Using mock mode."
  })
});