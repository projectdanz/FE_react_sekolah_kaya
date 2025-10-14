import React from "react";
import { Clock, BookOpen, Star, Award, ShoppingCart, Library } from "lucide-react";

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

  const stats = [
    {
      icon: Library,
      label: "Total Kelas Tersedia",
      value: "127",
      color: "text-purple-600",
      bgColor: darkMode ? "bg-purple-900/30" : "bg-purple-100"
    },
    {
      icon: ShoppingCart,
      label: "Kelas yang Dibeli",
      value: "8",
      color: "text-blue-600",
      bgColor: darkMode ? "bg-blue-900/30" : "bg-blue-100"
    },
    {
      icon: BookOpen,
      label: "Kelas Selesai",
      value: "4",
      color: "text-green-600",
      bgColor: darkMode ? "bg-green-900/30" : "bg-green-100"
    },
    {
      icon: Award,
      label: "Sertifikat Diperoleh",
      value: "4",
      color: "text-yellow-600",
      bgColor: darkMode ? "bg-yellow-900/30" : "bg-yellow-100"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Statistics Grid */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </p>
                  <p
                    className={`text-3xl font-bold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon size={24} className={stat.color} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Recent Activity */}
      <section>
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
            Aktivitas Terakhir
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
                <div className="flex-1">
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
                  <div className="flex items-center gap-3 mt-2">
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {activity.time}
                    </span>
                    <div className="flex-1 max-w-xs">
                      <div className={`h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: `${activity.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">
                      {activity.progress}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;