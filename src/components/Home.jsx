import React from "react";
import { Clock, BookOpen, Star } from "react-feather";

const Home = ({ darkMode }) => {
  const activities = [
    {
      title: "MERN Stack Development",
      lesson: "Authentication with JWT",
      time: "2 hours ago",
      progress: 75,
    },
    {
      title: "React Native",
      lesson: "Building Custom Components",
      time: "Yesterday",
      progress: 60,
    },
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          className={`p-6 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <h2
            className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Recent Activity
          </h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className={`p-2 rounded-lg ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3
                    className={`font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {activity.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {activity.lesson}
                  </p>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`p-6 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <h2
            className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Learning Stats
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen size={20} className="text-blue-600" />
                <span className={darkMode ? "text-gray-200" : "text-gray-700"}>
                  Courses Completed
                </span>
              </div>
              <span className="font-semibold text-blue-600">4</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-yellow-500" />
                <span className={darkMode ? "text-gray-200" : "text-gray-700"}>
                  Learning Hours
                </span>
              </div>
              <span className="font-semibold text-yellow-500">32h</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
