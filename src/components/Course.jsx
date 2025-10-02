import React from "react";
import { Play, Book, Clock } from "react-feather";

const Course = ({ darkMode }) => {
  const courseModules = [
    {
      title: "Introduction to MERN Stack",
      duration: "2h 30m",
      lessons: 12,
      completed: true,
    },
    {
      title: "MongoDB Basics",
      duration: "3h 15m",
      lessons: 8,
      completed: false,
    },
    {
      title: "Express.js Fundamentals",
      duration: "4h 45m",
      lessons: 15,
      completed: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div
        className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-sm`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Course Modules
          </h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Continue Learning
          </button>
        </div>

        <div className="space-y-4">
          {courseModules.map((module, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-50 hover:bg-gray-100"
              } transition-colors cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-lg ${
                      module.completed ? "bg-green-100" : "bg-blue-100"
                    }`}
                  >
                    {module.completed ? (
                      <Book size={20} className="text-green-600" />
                    ) : (
                      <Play size={20} className="text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h3
                      className={`font-medium ${
                        darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {module.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span
                        className={`flex items-center text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <Clock size={14} className="mr-1" />
                        {module.duration}
                      </span>
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {module.lessons} lessons
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    module.completed ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  {module.completed ? "Completed" : "In Progress"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
