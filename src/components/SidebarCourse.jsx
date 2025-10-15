import React, { useState, useEffect } from "react";
import { PlayCircle, Menu, X, Sun, Moon } from "react-feather";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SidebarCourse = ({
  isOpen,
  toggleSidebar,
  activeVideo,
  setActiveVideo,
  darkMode,
  toggleTheme,
}) => {
  const navigate = useNavigate();
  // Contoh data video course
  const videoList = [
    { id: 1, title: "Introduction", duration: "5:30" },
    { id: 2, title: "React Components", duration: "12:45" },
    { id: 3, title: "Props & State", duration: "10:20" },
    { id: 4, title: "React Hooks", duration: "15:10" },
    { id: 5, title: "Project: Todo App", duration: "18:50" },
  ];

  const { slug } = useParams();

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden flex items-center space-x-2">
        <button
          onClick={toggleSidebar}
          className={`
            p-2 rounded-lg shadow-lg transition-colors
            ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          <Menu size={24} />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`
            p-2 rounded-lg shadow-lg transition-colors
            ${
              darkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
  className={`
    fixed inset-y-0 left-0 z-50 w-72 h-screen
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
    lg:translate-x-0 lg:relative
    border-r
  `}
>
  <div className="h-full flex flex-col">
    {/* Header */}
    <div className="p-4 flex items-center justify-between">
      <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-blue-900"}`} onClick={()=>{
        navigate('/dashboard')
      }}>
        Course Videos: <br /> {slug}
      </h2>
      <div className="flex items-center space-x-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors ${darkMode ? "hover:bg-gray-700 text-yellow-400" : "hover:bg-gray-100 text-gray-600"}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Close Button Mobile */}
        <button
          onClick={toggleSidebar}
          className={`lg:hidden p-2 rounded-lg ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
        >
          <X size={20} className={darkMode ? "text-white" : "text-gray-600"} />
        </button>
      </div>
    </div>

    {/* Video List */}
    <nav className="flex-1 px-4 overflow-y-auto">
      {videoList.map((video) => (
        <button
          key={video.id}
          onClick={() => {
            setActiveVideo(video.id);
            if (window.innerWidth < 1024) toggleSidebar();
          }}
          className={`
            w-full flex items-center justify-between px-4 py-3 mb-2 rounded-lg
            transition-colors
            ${activeVideo === video.id
              ? darkMode
                ? "bg-gray-700 text-blue-400"
                : "bg-blue-50 text-blue-600"
              : darkMode
              ? "text-gray-300 hover:bg-gray-700"
              : "text-gray-600 hover:bg-gray-50"}
          `}
        >
          <div className="flex items-center space-x-3">
            <PlayCircle size={18} />
            <span>{video.title}</span>
          </div>
          <span className="text-xs opacity-70">{video.duration}</span>
        </button>
      ))}
    </nav>
  </div>
</aside>

    </>
  );
};

export default SidebarCourse;
