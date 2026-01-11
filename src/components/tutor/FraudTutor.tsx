import { useState } from "react";
import CourseList from "./CourseList.tsx";
import LessonPlayer from "./LessonPlayer.tsx";
import type { Course } from "../../data/courses.ts";

export default function FraudTutor() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen text-white flex flex-col items-center w-full">
      {!selectedCourse && (
        <div className="w-full flex justify-center items-center py-12">
          <CourseList onSelect={setSelectedCourse} />
        </div>
      )}

      {selectedCourse && (
        <div className="w-full flex flex-col items-center pt-8 max-w-5xl mx-auto px-4">
          <button
            onClick={() => setSelectedCourse(null)}
            className="self-start mb-6 inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            ← Back to Courses
          </button>

          <LessonPlayer course={selectedCourse} />
        </div>
      )}
    </div>
  );
}
