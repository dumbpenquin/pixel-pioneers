// DeepSeek API integration for chatbot
export async function sendToDeepSeek(userMessage: string): Promise<string> {
  try {
    // For now, we'll use a simple response system without API key
    // If you want to use DeepSeek API, add your API key in environment variables
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    
    if (!apiKey) {
      // Fallback responses for cybersecurity questions
      return getFallbackResponse(userMessage);
    }

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are CyberGuard, a helpful cybersecurity assistant. Help users understand online scams, fraud prevention, and digital safety. Provide clear, concise, and practical advice.'
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'I apologize, but I could not generate a response.';
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    // Return fallback response on error
    return getFallbackResponse(userMessage);
  }
}

function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('otp') || lowerMessage.includes('one-time password')) {
    return 'Never share your OTP with anyone, even if they claim to be from your bank or a government agency. Legitimate organizations never ask for OTPs over phone or messages. OTPs are only for you to enter directly into official apps or websites.';
  }
  
  if (lowerMessage.includes('upi') || lowerMessage.includes('payment')) {
    return 'UPI scams often involve fake payment requests disguised as refunds. Remember: receiving money does not require approval. If someone asks you to "approve a request" to receive money, it\'s actually sending money from your account. Never share your UPI PIN with anyone.';
  }
  
  if (lowerMessage.includes('phone') || lowerMessage.includes('call')) {
    return 'Phone call scams use fear and urgency to manipulate you. If someone calls claiming to be from your bank, police, or government and asks for personal information, OTP, or payment, hang up immediately. Always verify by calling the official number yourself.';
  }
  
  if (lowerMessage.includes('sms') || lowerMessage.includes('whatsapp') || lowerMessage.includes('message')) {
    return 'Be very cautious with messages from unknown numbers. Never click suspicious links, even if they appear to be from trusted sources. Legitimate banks and companies don\'t send urgent verification links via SMS or WhatsApp. Verify claims through official channels.';
  }
  
  if (lowerMessage.includes('scam') || lowerMessage.includes('fraud')) {
    return 'Common scam warning signs: urgent demands, requests for personal information, OTP, or payment, threats of account closure or legal action, promises that sound too good to be true. Always verify independently before taking any action.';
  }
  
  if (lowerMessage.includes('aadhaar') || lowerMessage.includes('identity') || lowerMessage.includes('document')) {
    return 'Never share Aadhaar, PAN card, or other identity documents through phone calls, WhatsApp, or unknown websites. Government agencies and banks never request sensitive documents this way. Only share documents at official offices or secure, verified portals.';
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('help')) {
    return 'Hello! I\'m CyberGuard, your cybersecurity assistant. I can help you understand phone call scams, SMS/WhatsApp fraud, UPI payment scams, identity theft, and more. Ask me anything about online safety and fraud prevention!';
  }
  
  return 'I can help you with cybersecurity topics like phone scams, SMS/WhatsApp fraud, UPI scams, identity theft, and online safety. Please ask me a specific question, and I\'ll provide guidance on how to protect yourself.';
}