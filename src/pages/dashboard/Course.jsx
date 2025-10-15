import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Clock, Book, Lock } from "react-feather";
import { useTheme } from "../../context/ThemeContext";
import { themeConfig } from "../../config/theme";

const Course = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const theme = darkMode ? themeConfig.dark : themeConfig.light;

  // Add isOwned property to courseModules
  const courseModules = [
    {
      id: 1,
      title: "Introduction to MERN Stack",
      duration: "2h 30m",
      lessons: 12,
      progress: 100,
      completed: true,
      link: "mern-intro",
      isOwned: true,
      price: "Rp 299.000",
      image:
        "https://images.unsplash.com/photo-1581093588401-ecfbc6f0f4b4?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "MongoDB Basics",
      duration: "3h 15m",
      lessons: 8,
      progress: 100,
      completed: true,
      link: "mongodb-basics",
      isOwned: true,
      price: "Rp 199.000",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Express.js Fundamentals",
      duration: "4h 45m",
      lessons: 15,
      progress: 20,
      completed: false,
      link: "express-fundamentals",
      isOwned: true,
      price: "Rp 249.000",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "React Advanced Patterns",
      duration: "5h 30m",
      lessons: 20,
      progress: 0,
      completed: false,
      link: "react-advanced",
      isOwned: false,
      price: "Rp 399.000",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Node.js Performance",
      duration: "4h 15m",
      lessons: 16,
      progress: 0,
      completed: false,
      link: "nodejs-performance",
      isOwned: false,
      price: "Rp 349.000",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop",
    },
  ];

  const getLastOpenedCourse = () => {
    const lastOpened = localStorage.getItem("lastOpenedCourse");
    if (lastOpened) {
      const found = courseModules.find((module) => module.link === lastOpened);
      return found || courseModules[0];
    }
    return courseModules[0];
  };

  const handleCourseClick = (module) => {
    if (module.isOwned) {
      navigate(`/courses/${module.link}`);
      localStorage.setItem("lastOpenedCourse", module.link);
    } else {
      // Handle purchase flow
      alert(`Purchase ${module.title} for ${module.price}`);
    }
  };

  return (
    <div className={`space-y-6 ${darkMode ? "dark" : ""}`}>
      {/* Owned Courses Section */}
      <div
        className={`p-6 rounded-xl shadow-sm ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            My Courses
          </h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => {
              const lastCourse = getLastOpenedCourse();
              navigate(`/courses/${lastCourse.link}`);
            }}
          >
            Continue Learning
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseModules
            .filter((module) => module.isOwned)
            .map((module) => (
              <div
                key={module.id}
                onClick={() => handleCourseClick(module)}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-lg 
                transition-all duration-300 cursor-pointer
                ${darkMode ? "bg-gray-800" : "bg-white"}`}
              >
                {/* Card Header */}
                <div className="relative">
                  {/* Image Container */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={
                        module.image || "https://via.placeholder.com/400x300"
                      }
                      alt={module.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Badge Overlay */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                        module.completed
                          ? "bg-green-500 bg-opacity-90 text-white"
                          : "bg-blue-500 bg-opacity-90 text-white"
                      }`}
                    >
                      {module.completed ? "Completed" : "In Progress"}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`p-3 rounded-lg backdrop-blur-sm ${
                        darkMode
                          ? "bg-gray-800 bg-opacity-20"
                          : "bg-gray-300 bg-opacity-20"
                      }`}
                    >
                      {module.completed ? (
                        <Book
                          size={24}
                          className={`${
                            darkMode ? "text-gray-300" : "text-gray-800"
                          }`}
                        />
                      ) : (
                        <Play
                          size={24}
                          className={`${
                            darkMode ? "text-gray-300" : "text-gray-800"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3
                    className={`text-lg font-semibold mb-3 ${
                      darkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {module.title}
                  </h3>

                  <div className="space-y-2">
                    <div
                      className={`flex items-center text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Clock size={16} className="mr-2" />
                      <span>{module.duration}</span>
                    </div>
                    <div
                      className={`flex items-center text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Book size={16} className="mr-2" />
                      <span>{module.lessons} lessons</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {module.progress !== undefined && (
                    <div
                      className={`mt-4 pt-4 border-t ${
                        darkMode ? "border-gray-600" : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm">
                        {module.progress < 100 ? (
                          <span
                            className={`font-medium ${
                              darkMode ? "text-blue-400" : "text-blue-600"
                            }`}
                          >
                            {module.progress}% Complete
                          </span>
                        ) : (
                          <span
                            className={`font-medium ${
                              darkMode ? "text-green-400" : "text-green-600"
                            }`}
                          >
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Progress bar visual */}
                      <div
                        className={`w-full rounded-full h-2 mt-2 ${
                          darkMode ? "bg-gray-600" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            module.progress === 100
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Available Courses Section */}
      <div
        className={`p-6 rounded-xl shadow-sm ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="mb-6">
          <h2
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Available Courses
          </h2>
          <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Explore more courses to enhance your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseModules
            .filter((module) => !module.isOwned)
            .map((module) => (
              <div
                key={module.id}
                onClick={() => handleCourseClick(module)}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-lg 
                transition-all duration-300 cursor-pointer
                ${darkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <div className="relative">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 filter brightness-50"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-500 text-white">
                      {module.price}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock size={32} className="text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-lg font-semibold mb-3 ${
                      darkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {module.title}
                  </h3>
                  <div className="space-y-2">
                    <div
                      className={`flex items-center text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Clock size={16} className="mr-2" />
                      <span>{module.duration}</span>
                    </div>
                    <div
                      className={`flex items-center text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Book size={16} className="mr-2" />
                      <span>{module.lessons} lessons</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Purchase Course
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
