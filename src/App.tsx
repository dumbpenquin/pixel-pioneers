import { useState } from "react";
import CyberBackground from "./components/ui/CyberBackground";
import FraudTutor from "./components/tutor/FraudTutor";
import Chatbot from "./components/chatbot/Chatbot";
import ScamsPage from "./components/scams/ScamsPage";
import RiskScanner from "./components/riskscanner/RiskScanner";
import Quiz from "./components/quiz/Quiz";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "courses" | "scams" | "quiz">("home");
  const [showChatbot, setShowChatbot] = useState(false);

  if (currentView === "courses") {
    return (
      <CyberBackground>
        <div className="relative">
          <button
            onClick={() => setCurrentView("home")}
            className="absolute top-6 left-6 z-20 bg-[#E63946] hover:bg-[#c9323f] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
          >
            <span>←</span> Back to Home
          </button>
          <FraudTutor />
        </div>
      </CyberBackground>
    );
  }

  if (currentView === "scams") {
    return (
      <CyberBackground>
        <div className="relative">
          <button
            onClick={() => setCurrentView("home")}
            className="absolute top-6 left-6 z-20 bg-[#E63946] hover:bg-[#c9323f] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
          >
            <span>←</span> Back to Home
          </button>
          <ScamsPage />
        </div>
      </CyberBackground>
    );
  }

  if (currentView === "quiz") {
    return (
      <CyberBackground>
        <div className="relative">
          <button
            onClick={() => setCurrentView("home")}
            className="absolute top-6 left-6 z-20 bg-[#E63946] hover:bg-[#c9323f] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
          >
            <span>←</span> Back to Home
          </button>
          <Quiz />
        </div>
      </CyberBackground>
    );
  }

  return (
    <CyberBackground>
      <div className="min-h-screen flex flex-col items-center pt-20 pb-20 px-4 relative">
        <div className="max-w-7xl w-full text-center space-y-16">
          {/* Header */}
          <div className="space-y-6 animate-in fade-in slide-in-from-top-8 duration-700">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 tracking-tighter pb-4 drop-shadow-sm">
              CYBERSAFE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Your personal shield against digital threats. Master identifying scams, verify risks, and stay protected.
            </p>
          </div>

          {/* Main Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {/* Courses Card */}
            <div
              onClick={() => setCurrentView("courses")}
              className="bg-[#1C1F2A]/80 backdrop-blur-sm border border-[#2A2E3B] rounded-3xl p-10 cursor-pointer transition-all duration-300 hover:border-red-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 active:scale-95 group h-full flex flex-col items-center justify-center relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setCurrentView("courses");
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300 relative z-10">📚</div>
              <h2 className="text-3xl font-bold mb-4 text-red-400 relative z-10">
                Defense Courses
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                Interactive lessons on identifying phone, SMS, and UPI scams.
              </p>
            </div>

            {/* Quiz Card */}
            <div
              onClick={() => setCurrentView("quiz")}
              className="bg-[#1C1F2A]/80 backdrop-blur-sm border border-[#2A2E3B] rounded-3xl p-10 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 group h-full flex flex-col items-center justify-center relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setCurrentView("quiz");
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300 relative z-10">🧩</div>
              <h2 className="text-3xl font-bold mb-4 text-blue-400 relative z-10">
                Threat Quiz
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                Test your detection skills with real-world scam scenarios.
              </p>
            </div>

            {/* Chatbot Card */}
            <div
              onClick={() => setShowChatbot(true)}
              className="bg-[#1C1F2A]/80 backdrop-blur-sm border border-[#2A2E3B] rounded-3xl p-10 cursor-pointer transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 active:scale-95 group h-full flex flex-col items-center justify-center relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowChatbot(true);
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300 relative z-10">🤖</div>
              <h2 className="text-3xl font-bold mb-4 text-purple-400 relative z-10">
                AI Assistant
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                Instant answers to your cyber safety questions.
              </p>
            </div>
          </div>

          {/* Risk Scanner Section */}
          <div className="py-8 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <RiskScanner />
          </div>

          {/* Most Common Scams Card */}
          <div className="w-full flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div
              onClick={() => setCurrentView("scams")}
              className="w-full max-w-5xl bg-[#1C1F2A]/80 backdrop-blur-sm border-2 border-[#2A2E3B] rounded-3xl p-12 cursor-pointer transition-all duration-300 hover:border-orange-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 active:scale-95 relative overflow-hidden group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setCurrentView("scams");
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-left md:w-2/3">
                  <h2 className="text-4xl font-bold mb-4 text-orange-400">
                    Most Common Scams
                  </h2>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Explore our database of 18+ common frauds. Learn detailed prevention steps, reporting guidelines, and authority contacts.
                  </p>
                </div>
                <div className="text-8xl md:text-9xl transform group-hover:rotate-12 transition-transform duration-500">⚠️</div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-8 animate-in fade-in duration-1000 delay-500">
            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl max-w-3xl mx-auto backdrop-blur-md">
              <p className="text-red-400 font-semibold flex items-center justify-center gap-2">
                <span className="animate-pulse">⚠️</span> Remember: Never share your OTP, UPI PIN, or personal documents
                with strangers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Modal */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </CyberBackground>
  );
}
