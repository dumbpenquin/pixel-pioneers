import { useState, useRef, useEffect } from "react";
import { sendToGemini } from "./gemini";
import FormattedMessage from "./FormattedMessage";

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "bot", text: "**Hello! I'm CyberGuard 🤖**\n\nI'm your advanced AI cybersecurity assistant. I can analyze threats, guide you through reporting procedures, and verify suspicious messages.\n\n**How can I protect you today?**\n• Report a scam\n• Check a phone number\n• Verify a website" }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      // Create valid history
      const history = messages.map(m => ({
        role: m.role as 'user' | 'bot',
        text: m.text
      }));

      const reply = await sendToGemini(userMsg, history);
      setMessages(prev => [...prev, { role: "bot", text: reply }]);
    } catch (error: any) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, {
        role: "bot",
        text: "I encountered a connection error. Please check your internet or try again later.\n\n**Emergency Contacts:**\n• Cyber Crime: 1930"
      }]);
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      {/* Main Container - Larger and more transparent/glassy */}
      <div
        className="relative w-full max-w-4xl h-[85vh] bg-[#0A0A0A] border border-[#333] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Sleek */}
        <div className="flex justify-between items-center p-6 border-b border-[#333] bg-[#0F0F0F]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-2xl">🛡️</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide">CYBERGUARD AI</h2>
              <p className="text-xs text-blue-400 font-mono tracking-wider">SECURE CONNECTION ESTABLISHED</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#252525] flex items-center justify-center text-gray-400 hover:text-white transition-all border border-[#333]"
          >
            ✕
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent bg-[url('/grid-pattern.png')]">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-5 ${m.role === "user"
                    ? "bg-blue-600/20 border border-blue-500/30 text-blue-100 rounded-tr-none"
                    : "bg-[#1A1A1A] border border-[#333] text-gray-200 rounded-tl-none shadow-xl"
                  }`}
              >
                {m.role === "bot" && (
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    AI Response
                  </div>
                )}
                {m.role === "bot" ? (
                  <FormattedMessage text={m.text} />
                ) : (
                  <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#1A1A1A] border border-[#333] rounded-2xl rounded-tl-none p-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-[#0F0F0F] border-t border-[#333]">
          <div className="relative">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Describe a suspicious message, call, or situation..."
              className="w-full bg-[#151515] border border-[#333] rounded-xl pl-6 pr-32 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
              autoFocus
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-600 text-white font-semibold rounded-lg transition-all"
            >
              Send
            </button>
          </div>
          <p className="text-center text-xs text-gray-600 mt-3">
            AI can make mistakes. Always verify critical information.
          </p>
        </div>
      </div>
    </div>
  );
}
