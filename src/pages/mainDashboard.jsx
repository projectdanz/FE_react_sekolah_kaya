import React, { useState } from "react";
import { Menu, Sun, Moon, Search, Book, Award } from "react-feather";
import Sidebar from "../components/Sidebar";
import Alert from "../components/Alert";
import CourseCard from "../components/CourseCard";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("course");
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      title: "Belajar MERN Stack",
      progress: 18,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "React Native Mobile Development",
      progress: 100,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Financial Freedom Mastery",
      progress: 67,
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      progress: 32,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
  ];

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header
          className={`${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          } border-b shadow-sm`}
        >   
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu
                  size={24}
                  className={darkMode ? "text-white" : "text-blue-900"}
                />
              </button>
              <h1
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-blue-900"
                }`}
              >
                {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-blue-900" />
                )}
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
                <span className="text-blue-900 font-bold">U</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {showAlert && <Alert onClose={() => setShowAlert(false)} />}

          <div className="mb-6 relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Cari berdasarkan judul..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-200 text-gray-700"
              } focus:border-yellow-400 focus:outline-none transition-colors`}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
              Beli Kursus Lainnya
            </button>
          </div>
            <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Total Kursus"
              value={courses.length}
              icon={Book}
              gradient="from-blue-600 to-blue-700"
              textColor="text-white"
            />
            <StatCard
              title="Rata-rata Progress"
              value={`${Math.round(
                courses.reduce((acc, c) => acc + c.progress, 0) / courses.length
              )}%`}
              icon={Award}
              gradient="from-yellow-400 to-yellow-500"
              textColor="text-blue-900"
            />
            <StatCard
              title="Sertifikat Didapat"
              value="2"
              icon={Award}
              gradient="from-green-500 to-green-600"
              textColor="text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

// StatCard component
const StatCard = ({ title, value, icon: Icon, gradient, textColor }) => (
  <div
    className={`bg-gradient-to-br ${gradient} rounded-xl p-6 ${textColor} shadow-lg`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className={`${textColor} opacity-75 text-sm mb-1`}>{title}</p>
        <h3 className="text-3xl font-bold">{value}</h3>
      </div>
      <Icon size={40} className={`${textColor} opacity-75`} />
    </div>
  </div>
);

export default Dashboard;
