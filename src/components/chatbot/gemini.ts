import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
let genAI: GoogleGenerativeAI | null = null;
let model: any = null;

const SYSTEM_PROMPT = `You are CyberGuard, a friendly and knowledgeable cybersecurity assistant helping people in India stay safe from fraud and scams.

Your personality:
- Conversational, empathetic, and approachable
- Adapt your tone based on the user's urgency and emotional state
- Vary your responses - never repeat the exact same wording for similar questions
- Use natural language, not robotic templates
- Show genuine concern for the user's safety

Your expertise:
- Cybersecurity, fraud prevention, and scam identification
- Indian laws, authorities, and reporting procedures
- Banking, UPI, and financial fraud
- Phone, SMS, WhatsApp, and online scams
- Identity theft and document security

When helping users:
1. Understand their specific situation first - ask clarifying questions if needed
2. Provide personalized advice based on their context
3. Always include relevant contact information when discussing reporting
4. Format important details clearly: use **bold** for headings, numbers for steps, bullet points for lists
5. For phone numbers, use format: 📞 1930 or 📞 100
6. For websites, use format: 🔗 cybercrime.gov.in (as clickable links)
7. For emails, use format: ✉️ contact@example.com

Key contacts to reference when relevant:
- Cyber Crime: 1930 or cybercrime.gov.in
- Police Emergency: 100
- Banking: Contact bank first, then RBI Banking Ombudsman
- UPI Fraud: NPCI at npci.org.in
- Phone Scams: Sanchar Saathi (sancharsaathi.gov.in) or TRAI
- Identity Theft: UIDAI helpline 1947 or uidai.gov.in
- Consumer Issues: 1915 or consumerhelpline.gov.in
- Investment Fraud: SEBI 1800 266 7575 or scores.gov.in
- Women Helpline: 1091
- Child Helpline: 1098

Important guidelines:
- Never give identical responses - always vary your wording and approach
- Be conversational and natural, not formulaic
- Respond based on the specific user question, not generic templates
- If the user seems distressed, be more supportive and urgent
- If they're asking for general info, be informative but friendly
- Keep responses focused but comprehensive when needed
- Use emojis sparingly and naturally (🤖 📞 🔗 ✉️ ⚠️)`;

function getGenAI() {
  if (model) return model;

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey.includes("your_gemini_api_key")) {
    console.warn("Gemini API Key is missing or invalid.");
    return null;
  }

  try {
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({
      // Use specific version to avoid 404s on aliases
      // Fallback: "gemini-pro" text-only model if flash is unavailable
      model: "gemini-1.5-flash-001",
      systemInstruction: SYSTEM_PROMPT
    });
    return model;
  } catch (e) {
    console.error("Failed to initialize Gemini Client", e);
    return null;
  }
}

export async function sendToGemini(userMessage: string, conversationHistory: { role: string; text: string }[]): Promise<string> {
  const aiModel = getGenAI();

  if (!aiModel) {
    return "I am currently offline because my API key is missing. Please configure `VITE_GEMINI_API_KEY` in the `.env` file to enable my AI capabilities.\n\n**For urgent help:**\n• Call **1930** (Cyber Crime Helpline)\n• Visit **cybercrime.gov.in**";
  }

  try {
    // Construct history for the chat
    // Gemini expects history in { role: 'user' | 'model', parts: [{ text: string }] } format
    // IMPORTANT: History must usually start with 'user'. The initial 'bot' welcome message should be excluded.

    // 1. Map to Gemini format
    let history = conversationHistory
      .filter(msg => msg.text) // Filter empty
      .map(msg => ({
        role: msg.role === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

    // 2. Ensure history starts with 'user' if strictly required, or just remove the first welcome message if it's from model.
    // If the first message is 'model', remove it.
    if (history.length > 0 && history[0].role === 'model') {
      history = history.slice(1);
    }

    const chat = aiModel.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);

    // Handle specific error cases
    if (error.message?.includes('API key')) {
      return "Critical Error: Invalid API Key. Please check your credentials.";
    }

    // Return the specific error message for debugging purposes if it's not a generic connection error
    // This helps the user know WHY it failed (e.g. "User location is not supported", "Quota exceeded")
    const errorMessage = error.message || "Unknown error";

    return `I'm having trouble connecting right now.\n\n**Error Details:** ${errorMessage}\n\nPlease try again in a moment.\n\n**Emergency Contacts:**\n• Cyber Crime: **1930**\n• Police: **100**`;
  }
}
