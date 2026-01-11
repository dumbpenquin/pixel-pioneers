import { useState } from 'react';

interface QuizQuestion {
    q: string;
    isScam: boolean;
}

const quizData: QuizQuestion[] = [
    { q: "SMS: 'Your electricity will be cut in 1 hour. Pay immediately via this link: bit.ly/power-pay'", isScam: true },
    { q: "Email: 'Amazon Order #1029 delayed. Update your billing address at portal-amazon.net'", isScam: true },
    { q: "WhatsApp: 'Hello, this is your bank. We noticed suspicious activity. Please share your OTP for verification.'", isScam: true },
    { q: "The website URL starts with 'HTTPS' and has a verified security certificate lock icon.", isScam: false },
    { q: "Call: 'You won a lottery prize of $50,000! Just pay a $100 processing fee to claim it now.'", isScam: true },
    { q: "Video Call: 'Police Officer claiming online arrest'", isScam: true },
    { q: "Notifications from the official banking app", isScam: false }
];

export default function Quiz() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<{ text: string; color: string } | null>(null);
    const [isFinished, setIsFinished] = useState(false);

    const checkAnswer = (userSaidScam: boolean) => {
        if (feedback) return; // Prevent double clicking

        const isCorrect = userSaidScam === quizData[currentIdx].isScam;

        if (isCorrect) {
            setScore(prev => prev + 1);
            setFeedback({ text: "✓ THREAT IDENTIFIED / SYSTEM SECURE", color: "#00ff87" });
        } else {
            setFeedback({ text: "✗ SECURITY BREACH / VULNERABILITY DETECTED", color: "#ff4d00" });
        }
    };

    const nextQuestion = () => {
        if (currentIdx + 1 < quizData.length) {
            setCurrentIdx(prev => prev + 1);
            setFeedback(null);
        } else {
            setIsFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentIdx(0);
        setScore(0);
        setFeedback(null);
        setIsFinished(false);
    };

    if (isFinished) {
        const analysisText = score > 5
            ? "EXCELLENT: Your cyber-defense levels are within safe parameters."
            : "WARNING: High vulnerability detected. Review security protocols.";

        return (
            <div className="max-w-3xl mx-auto mt-12 mb-12 relative overflow-hidden text-white bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 animate-pulse"></div>

                <div className="flex justify-between mb-8">
                    <div className="font-mono text-sm tracking-wider">
                        <span className="text-red-500 mr-2 font-bold">STATUS:</span>
                        <span className="font-bold">END</span>
                    </div>
                </div>

                <h1 className="font-mono text-center text-sm tracking-[6px] text-white/40 mb-8">DIAGNOSTICS COMPLETE</h1>

                <div className="bg-black/40 p-8 md:p-10 border border-red-500/20 rounded-lg relative mb-10 shadow-inner">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ff4d00] animate-pulse"></span>
                        <span className="font-mono text-[11px] text-red-500 tracking-widest">FINAL SECURITY SCORE</span>
                    </div>
                    <p className="text-5xl text-white font-light text-center my-8">
                        {score} / {quizData.length}
                    </p>
                    <p className="text-sm text-gray-400 mt-2 text-center max-w-lg mx-auto leading-relaxed">
                        {analysisText}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5">
                    <button
                        className="w-full p-5 font-mono font-bold text-sm uppercase tracking-wider cursor-pointer transition-all bg-transparent border border-white/10 text-white hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,77,0,0.4)] rounded-lg"
                        onClick={restartQuiz}
                    >
                        Re-run Analysis
                    </button>
                </div>
            </div>
        );
    }

    const progress = ((currentIdx + 1) / quizData.length) * 100;
    const currentQ = quizData[currentIdx];

    return (
        <div className="max-w-3xl mx-auto mt-12 mb-12 relative overflow-hidden text-white bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 animate-pulse"></div>

            <div className="flex justify-between items-center mb-8">
                <div className="font-mono text-sm tracking-wider">
                    <span className="text-red-500 mr-2 font-bold">CASE ID:</span>
                    <span className="font-bold text-xl">{(currentIdx + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-red-500 shadow-[0_0_10px_#ff4d00] transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <h1 className="font-mono text-center text-sm tracking-[6px] text-white/40 mb-8">THREAT ANALYSIS</h1>

            <div className="bg-black/40 p-8 md:p-10 border border-red-500/20 rounded-lg relative mb-10 shadow-inner">
                {/* Tech corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/50"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/50"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/50"></div>

                <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ff4d00] animate-pulse"></span>
                    <span className="font-mono text-[11px] text-red-500 tracking-widest">INCOMING MESSAGE FOR REVIEW</span>
                </div>
                <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-200">
                    "{currentQ.q}"
                </p>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-8">
                <button
                    className={`p-6 font-mono font-bold text-sm uppercase tracking-wider cursor-pointer transition-all bg-transparent border border-white/10 text-white rounded-lg hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,77,0,0.4)] ${feedback ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => checkAnswer(true)}
                    disabled={!!feedback}
                >
                    Detect Scam
                </button>
                <button
                    className={`p-6 font-mono font-bold text-sm uppercase tracking-wider cursor-pointer transition-all bg-transparent border border-white/10 text-white rounded-lg hover:text-[#00ff87] hover:border-[#00ff87] hover:shadow-[0_0_30px_rgba(0,255,135,0.1)] ${feedback ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => checkAnswer(false)}
                    disabled={!!feedback}
                >
                    Mark Safe
                </button>
            </div>

            <div className="h-16 flex items-center justify-between relative">
                {feedback && (
                    <>
                        <div
                            className="font-mono text-sm font-bold tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-300"
                            style={{ color: feedback.color }}
                        >
                            {feedback.text}
                        </div>
                        <button
                            className="bg-transparent border-none text-red-500 font-mono font-bold text-sm cursor-pointer hover:text-red-400 transition-colors uppercase tracking-wider flex items-center gap-2"
                            onClick={nextQuestion}
                        >
                            Next Module <span>→</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
