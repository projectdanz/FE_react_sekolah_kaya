import React, { useState } from "react";
import SidebarCourse from "../components/SidebarCourse";
import useTheme from "../hooks/useTheme";

const DetailCourse = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-100"
      }`}
    >
      <SidebarCourse
        isOpen={isOpen}
        toggleSidebar={() => setIsOpen(!isOpen)}
        activeVideo={activeVideo}
        setActiveVideo={setActiveVideo}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      {/* Video content section */}
      <div
        className={`p-6 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Add your video player and content here */}
      </div>
    </div>
  );
};

export default DetailCourse;
