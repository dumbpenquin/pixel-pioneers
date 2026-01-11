import { courses } from "../../data/courses.ts";
import type { Course } from "../../data/courses.ts";

type Props = {
  onSelect: (course: Course) => void;
};

export default function CourseList({ onSelect }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 inline-block pb-2 border-b-4 border-red-500/20 tracking-tighter uppercase font-mono">
          Defense Courses
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => onSelect(course)}
            className="bg-[#1C1F2A]/80 backdrop-blur-sm border border-[#2A2E3B] rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-red-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/20 active:scale-95 group text-center flex flex-col items-center h-full"
          >
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {course.title}
            </h3>
            {/* Optional description if available in data, or generic text */}
            <div className="h-1 w-12 bg-red-500/30 rounded-full mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
