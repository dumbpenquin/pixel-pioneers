import { useEffect, useState } from "react";
import type { Course, LessonItem } from "../../data/courses.ts";

type Props = { course: Course };

export default function LessonPlayer({ course }: Props) {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const item = course.lessons[index];

  useEffect(() => {
    saveProgress(course.id, index);
    if (!item) setCompleted(true);
  }, [index, item]);

  if (completed) {
    const getCompletionMessage = (courseId: string, courseTitle: string) => {
      switch (courseId) {
        case "phone":
          return {
            title: "🛡️ Phone Defense Master!",
            message: `Congratulations! You've mastered the art of spotting phone call scams. No more falling for fake bank calls or police threats. Your vigilance just saved you from potential financial disaster. Keep that phone security shield up!`,
            emoji: "📞"
          };
        case "sms":
          return {
            title: "💬 Message Guardian!",
            message: `Outstanding work! You're now a WhatsApp and SMS scam detector extraordinaire. Those sneaky links and urgent messages won't fool you anymore. Your digital literacy just leveled up significantly!`,
            emoji: "📱"
          };
        case "upi":
          return {
            title: "💰 Payment Protector!",
            message: `Brilliant! You've become a UPI and payment scam expert. Fake QR codes, suspicious transactions, and payment app tricks can't touch you now. Your financial fortress is impenetrable!`,
            emoji: "🏦"
          };
        case "identity":
          return {
            title: "🛡️ Identity Champion!",
            message: `Exceptional achievement! You're now a document and identity theft prevention specialist. Fake Aadhaar, forged documents, and identity scams stand no chance against your newfound knowledge. Stay vigilant, stay safe!`,
            emoji: "🔐"
          };
        default:
          return {
            title: "🎉 Course Completed!",
            message: `You finished ${courseTitle}`,
            emoji: "✅"
          };
      }
    };

    const completion = getCompletionMessage(course.id, course.title);

    return (
      <div className="mt-12 w-full max-w-2xl bg-[#1C1F2A] border border-[#2A2E3B] rounded-2xl p-10 text-center shadow-2xl mx-auto">
        <div className="text-6xl mb-6 animate-bounce">{completion.emoji}</div>
        <h2 className="text-3xl font-bold text-red-500 mb-4">{completion.title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto mb-8">{completion.message}</p>
        <div className="text-indigo-400 text-sm italic font-medium">
          Keep learning • Stay safe • Protect others
        </div>
      </div>
    );
  }

  if (!item) return null;

  return (
    <div className="mt-8 w-full flex justify-center px-4 mb-20">

      <div className="w-full max-w-3xl bg-[#1C1F2A]/90 backdrop-blur-xl border border-[#2A2E3B] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Progress Bar */}
        <ProgressBar current={index + 1} total={course.lessons.length} />

        {/* Content */}
        <div className="mt-8 min-h-[300px] flex flex-col justify-center">
          {item.kind === "card" && (
            <div className="animate-in fade-in duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
              <p className="text-gray-300 text-lg leading-loose mb-10 whitespace-pre-wrap">{item.content}</p>

              <div className="flex justify-end">
                <button
                  onClick={() => setIndex(index + 1)}
                  className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:translate-x-1"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {item.kind === "question" && (
            <QuestionCard item={item} onNext={() => setIndex(index + 1)} />
          )}
        </div>
      </div>

    </div>
  );
}

/* ---------------------- */

function QuestionCard({ item, onNext }: { item: LessonItem; onNext: () => void }) {
  if (item.kind !== "question") return null;

  const q = item.data;
  const [correct, setCorrect] = useState<boolean | null>(null);

  function check(ans: string) {
    setCorrect(ans === q.answer);
  }

  const options =
    q.type === "truefalse" ? (q.options || ["True", "False"]) : q.options || [];

  return (
    <div className="animate-in fade-in duration-500">
      <h3 className="text-2xl font-bold text-white mb-8">{q.question}</h3>

      <div className="grid gap-4 mb-8">
        {options.map((o) => (
          <div
            key={o}
            onClick={() => check(o)}
            className={`cursor-pointer rounded-xl p-4 text-lg font-medium transition-all duration-200 border-2 ${correct !== null && o === q.answer ? "border-green-500 bg-green-500/10 text-green-400" :
                correct !== null && o !== q.answer && correct === false ? "border-red-500/50 bg-[#141821] text-gray-400 opacity-50" :
                  "border-[#2A2E3B] bg-[#141821] hover:border-red-500/50 hover:bg-[#1A1F2E] text-white"
              }`}
          >
            {o}
          </div>
        ))}
      </div>

      {correct !== null && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className={`p-4 rounded-lg mb-6 ${correct ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400 font-bold"}`}>
            {correct ? "Correct! Well done." : "That's not quite right. Try again or check the correct answer."}
          </div>

          <div className="flex justify-end">
            <button
              onClick={onNext}
              className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:translate-x-1"
            >
              Continue →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------------- */

function ProgressBar({ current, total }: { current: number; total: number }) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
        <span>Progress</span>
        <span>{current} / {total}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-[#2A2E3B] overflow-hidden">
        <div
          className="h-full bg-red-500 shadow-[0_0_10px_#ef4444] transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function saveProgress(courseId: string, index: number) {
  const raw = localStorage.getItem("fraudTutorProgress");
  const data = raw ? JSON.parse(raw) : {};
  data[courseId] = index;
  localStorage.setItem("fraudTutorProgress", JSON.stringify(data));
}
